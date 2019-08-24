const moment = require('moment');

const timestamp = moment();

const NOCONTENT_204 = 'No Content success status response code indicates that the request has succeeded, but that the client doesn\'t need to go away from its current page';
const BADREQUEST_400 = 'The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).';
const UNAUTHORIZEDREQUEST_401 = 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.';
const FORBIDDENREQUEST_403 = 'The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort.';
const NOTFOUND_404 = 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.';
const GONE_410 = 'Gone: client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent';
const NOTACCEPTABLE_406 = 'The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields.';
const SERVERERROR_500 = 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.';
const errorMessage = (status, error, message, path) => ({
  timestamp,
  status,
  error,
  message,
  path,
});
module.exports.errorMessage = errorMessage;

module.exports.noContent204 = (path = '/ukjent', message = NOCONTENT_204) => {
  console.log(path, message);
  return '';
};
module.exports.badRequest400 = (path, message = BADREQUEST_400) => errorMessage(400, 'Bad Request', message, path);
module.exports.unauthorizedRequest401 = (path, message = UNAUTHORIZEDREQUEST_401) => errorMessage(401, 'Unauthorized', message, path);
module.exports.forbiddenRequest403 = (path, message = FORBIDDENREQUEST_403) => errorMessage(403, 'Unauthorized', message, path);
module.exports.notFound404 = (path, message = NOTFOUND_404) => errorMessage(404, 'Not Found', message, path);
module.exports.gone410 = (path, message = GONE_410) => errorMessage(410, 'Gone', message, path);
module.exports.notAcceptable406 = (path, message = NOTACCEPTABLE_406) => errorMessage(406, 'Not Acceptable', message, path);
module.exports.serverError500 = (path, message = SERVERERROR_500) => errorMessage(500, 'Internal Server Error', message, path);
