var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');

var Gallery = React.createClass({
    render: function () {
        console.log(this.props.imgs);

        var imgsString = atob(this.props.imgs);

        console.log(imgsString);

        var imgsJSON = JSON.parse(imgsString);

        var imgList = [];

        for(var x in imgsJSON){
            imgList.push(imgsJSON[x]);
        }

        // console.log(imgList);

        var thumbnails = imgList.map(function (image) {
            return <Thumbnail key={image.id} name={image.id} imageSrc={image.src} />;
        });
        return (<ul>{thumbnails}</ul>);
    }
});

module.exports = Gallery;