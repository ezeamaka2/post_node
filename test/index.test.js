import { expect, server, BASE_URL } from "./setup";
describe("Message", () => {
  it("get allt odos", (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.be.instanceOf(Array);
        res.body.messages.forEach((m) => {
          expect(m).to.have.property("description");
        });
        done();
      });
  });
});
