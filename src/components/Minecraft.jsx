var React = require('react');
var Gallery = require('./Gallery.jsx');

var Minecraft = React.createClass({
    render: function() {
        var imgs = require('../resources/Minecraft.jsx');
        imgs = btoa(JSON.stringify(imgs));
        return (
            <Gallery imgs={imgs}>
            </Gallery>
        );
    }
});

module.exports = Minecraft;