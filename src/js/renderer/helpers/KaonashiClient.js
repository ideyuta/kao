import request from 'superagent';

/**
 * Kaonashi Client
 */
export default class KaonashiClient {

  /**
   * Delete Note
   *
   * @param {string} id - note id
   * @return {Promise<Object>}
   */
  deleteNote(id) {
    return new Promise((resolve, reject) => {
      request.delete(`http://localhost:8080/note/${id}`)
        .end(err => {
          if (err) {
            return reject(err);
          }
          resolve({id});
        });
    });
  }

  /**
   * Get Note
   *
   * @param {string} id - note id
   * @return {Promise<Object>}
   */
  getNote(id) {
    return new Promise((resolve, reject) => {
      request.get(`http://localhost:8080/note/${id}`)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.data);
        });
    });
  }

  /**
   * Get Note Titles
   *
   * @return {Promise<Object>}
   */
  getNoteTitles() {
    return new Promise((resolve, reject) => {
      request.get('http://localhost:8080/note')
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.data);
        });
    });
  }

  /**
   * Post Note
   *
   * @param {string} body - body
   * @param {string} title - title
   * @return {Promise<Object>}
   */
  postNote(body, title) {
    return new Promise((resolve, reject) => {
      request.post('http://localhost:8080/note')
        .send({data: {body, title}})
        .set('Accept', 'application/json')
        .set('Content-type', 'application/json')
        .end(err => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
    });
  }

}
