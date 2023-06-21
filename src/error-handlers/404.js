'use strict';
// Creating Error Handler to handle Non-existent Pages with Status Code 404.
module.exports = (req, res) => {
  // console.log(req)
  res.status(404).json({
    code: 404,
    message: 'Page not Found!',
    route: req.originalUrl
  })

  // You can use path if you use app.get while using middleware
}