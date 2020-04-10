import messages from '../functions/translate/translate';
// import _logErroServico from '../servicos/_logErroServico';

function _erroControlador(err, req, res, next) {

  console.log("req Body :", req.body);
  console.log("req Query :", req.query);
  console.log("req Params :", req.params);
  console.log('"err Torre', err);
  //try {_logErroServico.incluir(JSON.stringify(err));} catch(e) {};

  const vErrorCode = err.errorCode || 500; // statusCode do Erro

  let vMessage = messages.get('pt-br', err.errorMessage, err.substituicoes);

  if (!vMessage) vMessage = err.message || err.errorMessage || "ERRONAODEFINIDO";

  console.log("vMensagem:", vMessage);

  res.status(vErrorCode).send({ message: vMessage, code: err.errorCode || "ERRONAODEFINIDO" });
};


export default _erroControlador;
