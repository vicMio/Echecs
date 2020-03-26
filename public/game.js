


const clic = [] ;
var pieceSelectionnee ="";

//definition plateau joueur/ses pions


const player = {
  pseudo: "eriot",
  couleur: "lion",
  abs: -1,
  ord: -1,
  casePlateau: -1,
  plateau: [0,0,0,0,0,0,0,0,0],
};

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

function drawCoup(){
  const {couleur, abs, ord, casePlateau, plateau} = player;
  if (abs != -1 && ord != -1 && casePlateau != -1 && plateau[casePlateau] == 0){
  var coup = new Image();
  coup.src = couleur+'.jpeg'; // Image de 80x80 pixels
  coup.addEventListener('load', function() {
      context.drawImage(coup, abs, ord);
    });
  }
  
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
  x = coords.x;
  y = coords.y;

  if (0 <= x && x< 200){
    if (0<= y && y<200){ //B1
      player.abs = 0;
      player.ord = 0;
      player.casePlateau = 0;
      player.Plateau[player.casePlateau] = 1;
    }
    else if(200<= y && y< 400){ //A1
      player.abs = 0;
      player.ord = 200;
      player.casePlateau = 1;
      player.Plateau[player.casePlateau] = 1;
    }
    else{ //colonne 1
      player.abs = 0;
      player.ord = 400;
      player.casePlateau = 2;
      player.Plateau[player.casePlateau] = 1;
    }
  }
  else if(200 <= x && x< 400){
    if (0<= y && y<200){ //B1
      player.abs = 200;
      player.ord = 0;
      player.casePlateau = 3;
      player.Plateau[player.casePlateau] = 1;
    }
    else if(200<= y && y< 400){ //A1
      player.abs = 200;
      player.ord = 200;
      player.casePlateau = 4;
      player.Plateau[player.casePlateau] = 1;
    }
    else{ //colonne 1
      player.abs = 200;
      player.ord = 400;
      player.casePlateau = 5;
      player.Plateau[player.casePlateau] = 1;
    }
  }
  else{
    if (0<= y && y<200){ //B1
      player.abs = 400;
      player.ord = 0;
      player.casePlateau = 6;
      player.Plateau[player.casePlateau] = 1;
    }
    else if(200<= y && y< 400){ //A1
      player.abs = 400;
      player.ord = 200;
      player.casePlateau = 7;
      player.Plateau[player.casePlateau] = 1;
    }
    else{ //colonne 1
      player.abs = 400;
      player.ord = 400;
      player.casePlateau = 8;
      player.Plateau[player.casePlateau] = 1;
    }
  }

};




function update() {
  drawCoup();                       // 2.
  requestAnimationFrame(update);                    // 3.
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
