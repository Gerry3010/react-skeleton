var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var Minecraft = require('./components/Minecraft.jsx');

var Routes = (
    <Router>
        <Route path="/" component={Base}>
            <Route path="/minecraft" component={Minecraft}>
                <Route path="/minecraft/:image" component={Picture}/>
            </Route>
        </Route>
    </Router>
);

module.exports = Routes;