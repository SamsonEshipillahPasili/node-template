import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../../src/app';

chai.use(chaiHttp);

const requester  = chai.request(app);

describe('Server Test', () => {

    it('should return 404 - not found', async () => {
        const response = await requester.get('/test').send();
        expect(response).to.have.status(404);
    });
});