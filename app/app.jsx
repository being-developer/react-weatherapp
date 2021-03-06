var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>s
      <Route path="examples" component={Example}></Route>s
        <IndexRoute component={Weather}/>
    </Route>
  </Router>
  ,
     document.getElementById('app'));
