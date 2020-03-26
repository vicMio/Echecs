


const clic = [] ;
var pieceSelectionnee ="";

//definition plateau joueur/ses pions
const plateau = [0,0,0,
                 0,0,0,
                 0,0,0];

const player = {
  pseudo = "eriot";
  couleur = "croix";
};

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

function drawPlateau(joueur, x, y){
  var coup = new Image();
  coup.src = joueur+'.png'; // Image de 80x80 pixels
  coup.addEventListener('load', function() {
      context.drawImage(coup, x, y);
    });
}

//recup les coordonnees de la souris dans le canva
function getCoords(el,event) {
  var ox = el.scrollLeft - el.offsetLeft,
  oy = el.scrollTop - el.offsetTop;
  while(el=el.offsetParent){
    ox += el.scrollLeft - el.offsetLeft;
    oy += el.scrollTop - el.offsetTop;
  }
  return {x:event.clientX + ox , y:event.clientY + oy};
}



canvas.onclick = function(e) {

  var coords = getCoords(this,e);
  const {A1, B1, C1, D1, pion1, tourG} = player;


  x = coords.x;
  y = coords.y;


  if (0 <= x && x< 80){
    if (480<= y && y<560){ //B1
      context.fillStyle = "yellow";
      context.beginPath();
      context.rect(0, 480, 80, 80);
      context.fill();
      pieceSelectionnee = B1;
      player.B1="";
      player.C2="pion1";

    }
    else if(560<= y && y< 640){ //A1
      context.fillStyle = "green";
      context.beginPath();
      context.rect(0,560, 80,80);
      context.fill();
      pieceSelectionnee = A1;
    }
    else{ //colonne 1
      context.fillStyle = "pink";
      context.beginPath();
      context.rect(0, y, 80,80);
      context.fill();
      pieceSelectionnee = C1;
    }
  }
  else if(80 <= x && x< 160){
    if (480<= y && y<560){
      context.fillStyle = "yellow";
      context.beginPath();
      context.rect(x, y, 80, 80);
      context.fill();
    }
    else if(560<= y && y< 640){
      context.fillStyle = "green";
      context.beginPath();
      context.rect(x, y, 80,80);
      context.fill();
    }
    else{
      context.fillStyle = "pink";
      context.beginPath();
      context.rect(x, y, 80,80);
      context.fill();
    }
  }

};




function update() {
  drawPlateau();                                    // 2.
  //requestAnimationFrame(update);                    // 3.
}


function moveElement() {

}








// first call
requestAnimationFrame(update);















///////////////////////////////////// SI BESOIN
function drawPlayers() {
  const {pion1, pion2, pion3, pion4, pion5, pion6, pion7, pion8, tourG, cavalierG, fouG, reine, roi, fouD, cavalierD, tourD, couleur} = player;
  context.fillStyle = couleur;

  var pion1Var = new Image();
  pion1Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion1Var.addEventListener('load', function() {
      context.drawImage(pion1Var, pion1[0], pion1[1]);
    });

  var pion2Var = new Image();
  pion2Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion2Var.addEventListener('load', function() {
      context.drawImage(pion2Var, pion2[0], pion2[1]);
    });

  var pion3Var = new Image();
  pion3Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion3Var.addEventListener('load', function() {
      context.drawImage(pion3Var, pion3[0], pion3[1]);
    });

  var pion4Var = new Image();
  pion4Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion4Var.addEventListener('load', function() {
      context.drawImage(pion4Var, pion4[0], pion4[1]);
    });

  var pion5Var = new Image();
  pion5Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion5Var.addEventListener('load', function() {
      context.drawImage(pion5Var, pion5[0], pion5[1]);
    });

  var pion6Var = new Image();
  pion6Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion6Var.addEventListener('load', function() {
      context.drawImage(pion6Var, pion6[0], pion6[1]);
  });

  var pion7Var = new Image();
  pion7Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion7Var.addEventListener('load', function() {
      context.drawImage(pion7Var, pion7[0], pion7[1]);
  });

  var pion8Var = new Image();
  pion8Var.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion8Var.addEventListener('load', function() {
      context.drawImage(pion8Var, pion8[0], pion8[1]);
  });

  var tourGVar = new Image();
  tourGVar.src = 'tourNoir.png'; // Image de 80x80 pixels
  tourGVar.addEventListener('load', function() {
  context.drawImage(tourGVar, tourG[0], tourG[1]);
  });

  var tourDVar = new Image();
  tourDVar.src = 'tourNoir.png'; // Image de 80x80 pixels
  tourDVar.addEventListener('load', function() {
  context.drawImage(tourDVar, tourD[0], tourD[1]);
  });

  var cavalierGVar = new Image();
  cavalierGVar.src = 'cavalierNoir.png'; // Image de 80x80 pixels
  cavalierGVar.addEventListener('load', function() {
  context.drawImage(cavalierGVar, cavalierG[0], cavalierG[1]);
  });

  var cavalierDVar = new Image();
  cavalierDVar.src = 'cavalierNoir.png'; // Image de 80x80 pixels
  cavalierDVar.addEventListener('load', function() {
  context.drawImage(cavalierDVar, cavalierD[0], cavalierD[1]);
  });

  var fouGVar = new Image();
  fouGVar.src = 'fouNoir.png'; // Image de 80x80 pixels
  fouGVar.addEventListener('load', function() {
  context.drawImage(fouGVar, fouG[0], fouG[1]);
  });

  var fouDVar = new Image();
  fouDVar.src = 'fouNoir.png'; // Image de 80x80 pixels
  fouDVar.addEventListener('load', function() {
  context.drawImage(fouDVar, fouD[0], fouD[1]);
  });

  var reineVar = new Image();
  reineVar.src = 'reineNoir.png'; // Image de 80x80 pixels
  reineVar.addEventListener('load', function() {
  context.drawImage(reineVar, reine[0], reine[1]);
  });

  var roiVar = new Image();
  roiVar.src = 'roiNoir.png'; // Image de 80x80 pixels
  roiVar.addEventListener('load', function() {
  context.drawImage(roiVar, roi[0], roi[1]);
  });

}
