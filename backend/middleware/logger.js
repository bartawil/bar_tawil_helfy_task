/**
 * HTTP request logger middleware
 */
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`); // Log request method and URL
    next();
}
  
module.exports = logger;
