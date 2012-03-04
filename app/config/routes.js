module.exports = function (app) {
  return {
    root: [
      ['get', '/', 'Home'],
      ['get', '/hello/:name', 'Home', 'hello']
    ]
  }
}
