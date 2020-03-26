


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






// first call
requestAnimationFrame(update);
