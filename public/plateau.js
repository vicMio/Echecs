var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');
context.fillStyle = "red";

context.fillRect(0, 0, 200, 200);
context.fillRect(400, 0, 200, 200);


context.fillRect(200, 200, 200, 200);

context.fillRect(0, 400, 200, 200);
context.fillRect(400, 400, 200, 200);
