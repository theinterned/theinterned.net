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
            {/* styles (will be present only in production with webpack extract text plugin) */}
            {Object.keys(assets.styles).map((style, key) =>
              <link href={assets.styles[style]} key={key} media="screen, projection"
                    rel="stylesheet" type="text/css" charSet="UTF-8"/>
            )}
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
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  // console.log(locals);
  console.log(Root);
  var html = ReactDOMServer.renderToStaticMarkup(<Root assets={webpackIsomorphicTool.assets()} />, locals);
  callback(null, '<!DOCTYPE html>' + html);
}
