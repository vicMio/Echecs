var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var side = 1/3 * width

context.fillStyle = "red";

context.fillRect(0, 0, side, side);

context.fillRect(2*side, 0, side, side);

context.fillRect(side, side, side, side);

context.fillRect(0, 2*side, side, side);

context.fillRect(2*side, 2*side, side, side);
