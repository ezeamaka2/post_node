import { expect, server, BASE_URL } from "./setup";

describe("Index page test", () => {
  it("gets base url", (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
