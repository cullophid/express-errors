'use strict';
var BadRequest, NotFound, Internal, Forbidden, NotAuthorized, MethodNotAllowed, NotImplemented, BadGateway;


// 4XX
exports.BadRequestError = BadRequest = function (message) {
  this.name = "BadRequestError";
  this.code = 400;
  this.message = message || "Bad Request.";
};
BadRequest.prototype = new Error();
BadRequest.prototype.constructor = BadRequest;

exports.NotAuthorizedError = NotAuthorized = function (message) {
  this.name = "NotAuthorizedError";
  this.code = 401;
  this.message = message || "Not Authorized.";
};
NotAuthorized.prototype = new Error();
NotAuthorized.prototype.constructor = NotAuthorized;

exports.ForbiddenError = Forbidden = function (message) {
  this.name = "ForbiddenError";
  this.code = 403;
  this.message = message || "Forbidden.";
};
Forbidden.prototype = new Error();
Forbidden.prototype.constructor = NotAuthorized;

exports.NotFoundError = NotFound = function (message) {
  this.name = "NotFoundError";
  this.code = 404;
  this.message = message || "Resource Not Found";
};
NotFound.prototype = new Error();
NotFound.prototype.constructor = NotFound;


exports.MethodNotAllowedError = MethodNotAllowed = function (message) {
  this.name = "NotFoundError";
  this.code = 405;
  this.message = message || "Method Not Allowed";
};
MethodNotAllowed.prototype = new Error();
MethodNotAllowed.prototype.constructor = MethodNotAllowed;


// 5XX
exports.InternalError = Internal = function (message) {
  this.name = "InternalError";
  this.code = 500;
  this.message = message || "Internal Server Error";
};
Internal.prototype = new Error();
Internal.prototype.constructor = Internal;

exports.NotImplementedError = NotImplemented = function (message) {
  this.name = "NotImplementedError";
  this.code = 501;
  this.message = message || "Not Implemented";
};
NotImplemented.prototype = new Error();
NotImplemented.prototype.constructor = NotImplemented;

exports.BadGatewayError = BadGateway = function (message) {
  this.name = "BadGatewayError";
  this.code = 502;
  this.message = message || "Bad Gateway";
};
BadGateway.prototype = new Error();
BadGateway.prototype.constructor = BadGateway;
