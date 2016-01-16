import request from 'superagent';

/**
 * Kaonashi Client
 */
export default class KaonashiClient {

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
   * @return {Promise<Object>}
   */
  postNote() {
    return new Promise((resolve, reject) => {
      request.post('http://localhost:8080/note')
        .send({data: {body: 'note body', title: 'POST'}})
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
