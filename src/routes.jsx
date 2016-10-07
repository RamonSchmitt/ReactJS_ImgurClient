var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.hashHistory;

var Main = require('./components/main');

module.exports = (
  <Router history={History}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
);
