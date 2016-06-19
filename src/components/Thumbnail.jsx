var React = require('react');

var Thumbnail = React.createClass({
    render: function () {
        //noinspection JSUnresolvedVariable
        return (
            <div className="thumbnail-wrapper">
                <img className="thumbnail" src={this.props.imageSrc} onLoad={this.onImgLoad} id={this.props.name}
                     onClick={this.onImgClick}/>
            </div>
        );
    },
    onImgLoad: function (event) {
        var jTarget = $('#' + event.target.id);

        jTarget.hover(
            function () {
                jTarget.animate({boxShadow: "0 0 10px #21A4F4"}, 200);
            },
            function () {
                jTarget.animate({boxShadow: "none"}, 200);
            }
        );
    },
    onImgClick: function (event) {
        var jTarget = $('#' + event.target.id);

        jTarget.css({
            height        : '300px',
            'max-height'  : 'none'
        });

        jTarget.css({
            position      : 'absolute',
            left          : '50%',
            top           : '50%',
            'margin-top'  : '-' + Math.round(jTarget.height() / 2) + 'px',
            'margin-left' : '-' + Math.round(jTarget.width() / 2) + 'px'
        });
    }
});

module.exports = Thumbnail;