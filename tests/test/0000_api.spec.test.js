require('dotenv').config();
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

let vLogin = { login: "jdias", password: "123456" };

const vURL_SERVICOS = process.env.URL_SERVICOS;
const vPORTA_API = process.env.PORTA_API;

//global.urlBase = "http://localhost:8080";
global.urlBase = `http://${vURL_SERVICOS}:${vPORTA_API}`;

describe('/POST Login API', () => {
    it('Verificar a geração do token autenticação', (done) => {
        chai.request(global.urlBase)
            .post('/api/authentication/authenticate')
            .send(vLogin)
            .end((err, res) => {
                global.token = 'Bearer ' + res.body.info.token;                
                res.should.have.status(200);
                done();
            });
    });

});
