import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('Movies controller', () => {
  it('GIVEN that I want to call the get movies api WHEN I do the call THEN it must return a hello world', (done) => {
    request(app)
      .get('/getMovies')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('Hello World!');
        done();
      });
  });
});