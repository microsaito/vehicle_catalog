let chai = require('chai');
let chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

const vUrlBase = global.urlBase;

describe('Brands', () => {

    it('Create Brand', (done) => {
            chai.request(vUrlBase)
                .post('/api/brands')
                .set('authorization', global.token)
                .send({ name: 'Brand 001'}) 
                .end((err, res) => {
                    if(err) console.log(err);
                    res.should.have.status(200);
                    done();
                });
    });   
    

    it('List Brands', (done) => {
        chai.request(vUrlBase)
            .get('/api/brands')
            // .set('x-access-token', global.token) does not need token
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('info');
                done();
            });
    });
});
