// entry.js with no routing
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var App = require('../src/App')

let Root = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id='root'>
            <App />
          </div>
          <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
});

module.exports = function render(locals, callback) {
  // console.log(locals);
  console.log(Root);
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}
