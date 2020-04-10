
function ErrorBase(pErrorCode, pErrorMessage, pReplacements) {
  this.errorCode = pErrorCode;
  this.errorMessage = pErrorMessage;
  this.replacements = pReplacements;
};

export default ErrorBase;
