const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://3.22.68.53:4000',
          changeOrigin: true
      })
  )
};