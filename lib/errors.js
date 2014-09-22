'use strict';
var BadRequest, NotFound, Internal, Forbidden, NotAuthorized, MethodNotAllowed, NotImplemented, BadGateway;


exports.getErrorFromCode = function (code) {
  var i;
  for (i in exports) {
    if (exports.hasOwnProperty(i) && i !== 'getErrorFromCode') {
      if(exports[i].code === Number(code)) {
        return exports[i];
      }
    }
  }
  return false;
};
// 4XX
exports.BadRequestError = BadRequest = function (message) {
  this.name = "BadRequestError";
  this.statusCode = 400;
  this.message = message || "Bad Request.";
};
BadRequest.prototype = new Error();
BadRequest.prototype.constructor = BadRequest;

exports.NotAuthorizedError = NotAuthorized = function (message) {
  this.name = "NotAuthorizedError";
  this.statusCode = 401;
  this.message = message || "Not Authorized.";
};
NotAuthorized.prototype = new Error();
NotAuthorized.prototype.constructor = NotAuthorized;

exports.ForbiddenError = Forbidden = function (message) {
  this.name = "ForbiddenError";
  this.statusCode = 403;
  this.message = message || "Forbidden.";
};
Forbidden.prototype = new Error();
Forbidden.prototype.constructor = NotAuthorized;

exports.NotFoundError = NotFound = function (message) {
  this.name = "NotFoundError";
  this.statusCode = 404;
  this.message = message || "Resource Not Found";
};
NotFound.prototype = new Error();
NotFound.prototype.constructor = NotFound;


exports.MethodNotAllowedError = MethodNotAllowed = function (message) {
  this.name = "NotFoundError";
  this.statusCode = 405;
  this.message = message || "Method Not Allowed";
};
MethodNotAllowed.prototype = new Error();
MethodNotAllowed.prototype.constructor = MethodNotAllowed;


// 5XX
exports.InternalError = Internal = function (message) {
  this.name = "InternalError";
  this.statusCode = 500;
  this.message = message || "Internal Server Error";
};
Internal.prototype = new Error();
Internal.prototype.constructor = Internal;

exports.NotImplementedError = NotImplemented = function (message) {
  this.name = "NotImplementedError";
  this.statusCode = 501;
  this.message = message || "Not Implemented";
};
NotImplemented.prototype = new Error();
NotImplemented.prototype.constructor = NotImplemented;

exports.BadGatewayError = BadGateway = function (message) {
  this.name = "BadGatewayError";
  this.statusCode = 502;
  this.message = message || "Bad Gateway";
};
BadGateway.prototype = new Error();
BadGateway.prototype.constructor = BadGateway;
