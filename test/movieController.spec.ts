import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import sinon from 'sinon';
import nock from 'nock';
import { MockMovies } from "./mock";

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

let sandbox: sinon.SinonSandbox;

describe('Movies controller', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
    sinon.restore();
    nock.cleanAll();
  });

  it('GIVEN that I want to call the get movies api WHEN I do the call THEN it must return the list of movies', (done) => {
    MockMovies.getMoviesSuccess(sandbox);
    request(app)
      .get('/getMovies')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Get movies');
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body.data).to.deep.include.members([
          { id: 1, name: 'The Lord of the Rings: The Fellowship of the Ring', duration: 178, classificationId: 1 },
          { id: 2, name: 'The Lord of the Rings: The Two Towers', duration: 179, classificationId: 1 },
          { id: 3, name: 'The Lord of the Rings: The Return of the King', duration: 201, classificationId: 1 }
        ]);
        done();
      });
  });
});