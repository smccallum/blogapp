module.exports = function (app, config) {
  return app.getController("Application", true).extend()
  .methods({
    index: function (req, res) {
      this.render(res, 'index', {
        title: 'The Matador Framework'
      })
    },
    hello: function (request, response, name) {
      response.send("Hello " + name);
    }
  })
}
