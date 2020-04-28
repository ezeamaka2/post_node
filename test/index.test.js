import { expect, server, BASE_URL, ID_URL } from "./setup";

describe("Todo Api", () => {
  describe("Index page test", () => {
    it("It should GET all the todos", (done) => {
      server
        .get(`${BASE_URL}/`)
        .expect(200)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.be.an("array");
          done();
        });
    });

    it("It should NOT GET todos", (done) => {
      server
        .get(`${BASE_URL}w/`)
        .expect(404)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });

  //Testing a single route
});
