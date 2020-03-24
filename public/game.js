



const player = {
  pseudo: "eriot",
  couleur: "yellow",
  pion1X: 0,
  pion2X: 80,
  pion3X: 160,
  pion4X: 240,
  pion5X: 320,
  pion6X: 400,
  pion7X: 480,
  pion8X: 560,

  tourGX: 0,
  cavalierGX: 80,
  fouGX: 160,
  reineX: 240,
  roiX: 320,
  fouDX: 400,
  cavalierDX: 480,
  tourDX: 560,

  pion1Y: 480,
  pion2Y: 480,
  pion3Y: 480,
  pion4Y: 480,
  pion5Y: 480,
  pion6Y: 480,
  pion7Y: 480,
  pion8Y: 480,

  tourGY: 560,
  cavalierGY: 560,
  fouGY: 560,
  reineY: 560,
  roiY: 560,
  fouDY: 560,
  cavalierDY: 560,
  tourDY: 560,
};

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

function drawPlayers() {
  const {pion1X, pion2X, pion3X, pion4X, pion5X, pion6X, pion7X, pion8X, tourGX, cavalierGX, fouGX, reineX, roiX, fouDX, cavalierDX, tourDX, pion1Y, pion2Y, pion3Y, pion4Y, pion5Y, pion6Y, pion7Y, pion8Y, tourGY, cavalierGY, fouGY, reineY, roiY, fouDY, cavalierDY, tourDY, couleur} = player;
  context.fillStyle = couleur;

  var pion1 = new Image();
  pion1.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion1.addEventListener('load', function() {
        context.drawImage(pion1, pion1X, pion1Y);
    });

  var pion2 = new Image();
  pion2.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion2.addEventListener('load', function() {
        context.drawImage(pion2, pion2X, pion2Y);
    });

  var pion3 = new Image();
  pion3.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion3.addEventListener('load', function() {
        context.drawImage(pion3, pion3X, pion3Y);
    });

  var pion4 = new Image();
  pion4.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion4.addEventListener('load', function() {
        context.drawImage(pion4, pion4X, pion4Y);
    });

  var pion5 = new Image();
  pion5.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion5.addEventListener('load', function() {
        context.drawImage(pion5, pion5X, pion5Y);
    });

  var pion6 = new Image();
  pion6.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion6.addEventListener('load', function() {
  context.drawImage(pion6, pion6X, pion6Y);
  });

  var pion7 = new Image();
  pion7.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion7.addEventListener('load', function() {
  context.drawImage(pion7, pion7X, pion7Y);
  });

  var pion8 = new Image();
  pion8.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion8.addEventListener('load', function() {
  context.drawImage(pion8, pion8X, pion8Y);
  });

  var tourG = new Image();
  tourG.src = 'tourNoir.png'; // Image de 80x80 pixels
  tourG.addEventListener('load', function() {
  context.drawImage(tourG, tourGX, tourGY);
  });

  var tourD = new Image();
  tourD.src = 'tourNoir.png'; // Image de 80x80 pixels
  tourD.addEventListener('load', function() {
  context.drawImage(tourD, tourDX, tourDY);
  });

  var cavalierG = new Image();
  cavalierG.src = 'cavalierNoir.png'; // Image de 80x80 pixels
  cavalierG.addEventListener('load', function() {
  context.drawImage(cavalierG, cavalierGX, cavalierGY);
  });

  var cavalierD = new Image();
  cavalierD.src = 'cavalierNoir.png'; // Image de 80x80 pixels
  cavalierD.addEventListener('load', function() {
  context.drawImage(cavalierD, cavalierDX, cavalierDY);
  });

  var fouG = new Image();
  fouG.src = 'fouNoir.png'; // Image de 80x80 pixels
  fouG.addEventListener('load', function() {
  context.drawImage(fouG, fouGX, fouGY);
  });

  var fouD = new Image();
  fouD.src = 'fouNoir.png'; // Image de 80x80 pixels
  fouD.addEventListener('load', function() {
  context.drawImage(fouD, fouDX, fouDY);
  });

  var reine = new Image();
  reine.src = 'reineNoir.png'; // Image de 80x80 pixels
  reine.addEventListener('load', function() {
  context.drawImage(reine, reineX, reineY);
  });

  var roi = new Image();
  roi.src = 'roiNoir.png'; // Image de 80x80 pixels
  roi.addEventListener('load', function() {
  context.drawImage(roi, roiX, roiY);
  });

}

function update() {
  drawPlayers();                                    // 2.
  requestAnimationFrame(update);                    // 3.
}

const elementX = -1 ;
const elementY = -1 ;

window.onclick = function(e) {

};





function moveElement() {
  
}














// first call
requestAnimationFrame(update);
