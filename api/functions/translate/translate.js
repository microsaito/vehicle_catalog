function get(pLanguage, pErrorMessage, pReplacements) {    

   let messageList = null;
  
   if(pLanguage) {
     try {
      messageList = require(`./mensagens_${pLanguage}`);
     } catch(e) {}

   }

   if(!messageList) messageList = require(`./mensagens_pt-br`); // default

   let vMessage = messageList[pErrorMessage];

   if(!vMessage) vMessage = pErrorMessage;
   else if(pReplacements && Array.isArray(pReplacements)) {
    for (let i = 0; i <= pReplacements.length; i++) {
      vMessage = vMessage.replace("%%%", pReplacements[i]);
    }
  }

   return vMessage;
};

var messages = {
    get: (pLinguagem, pCodigoMensagem, pSubstituicoes) => { return get(pLinguagem, pCodigoMensagem, pSubstituicoes) }
};

export default messages;