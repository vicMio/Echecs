//fichier de jeu

var socket = io.connect('http://localhost:8080');

let players = [];

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

//draw le pattern associe au joueur qui joue (un lion ou une croix pour le moment)
function drawCoup(){
  players.forEach(function({couleur, abs, ord, casePlateau, plateau}) {
    if (abs != -1 && ord != -1 && casePlateau != -1 && plateau[casePlateau] == 0){
    var coup = new Image();
    coup.src = couleur+'.jpeg'; // Image de 80x80 pixels
    coup.addEventListener('load', function() {
        context.drawImage(coup, abs, ord);
      });
    }
  });
}

socket.on('players list', function(list) {
  players = list;
});


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


//indique ou va devoir etre trace le pattern du joueur, selon l endroit ou le joueur a clique
canvas.onclick = function(e) {
  var coords = getCoords(this,e);
  x = coords.x;
  y = coords.y;

  if (0 <= x && x< 200){
    if (0<= y && y<200){ //B1
      socket.emit('caseCom',[0, 0, 0]);

    }
    else if(200<= y && y< 400){ //A1
      socket.emit('caseCom',[0, 200, 1]);

    }
    else{ //colonne 1
      socket.emit('caseCom', [0, 400, 2]);

    }
  }
  else if(200 <= x && x< 400){
    if (0<= y && y<200){ //B1
      socket.emit('caseCom',[200, 0, 3]);

    }
    else if(200<= y && y< 400){ //A1
      socket.emit('caseCom',[200, 200, 4]);
      //player.abs = 200;
    //  player.ord = 200;
      //player.casePlateau = 4;
      //player.Plateau[player.casePlateau] = 1;
    }
    else{ //colonne 1
      socket.emit('caseCom', [200, 400, 5]);

    }
  }
  else{
    if (0<= y && y<200){ //B1
      socket.emit('caseCom',[400, 0, 6]);

    }
    else if(200<= y && y< 400){ //A1
      socket.emit('caseCom', [400, 200, 7]);

    }
    else{ //colonne 1
      socket.emit('caseCom',[400, 400, 8]);

    }
  }

};



//jeu
function update() {
  drawCoup();                       // 2.
  requestAnimationFrame(update);                    // 3.
}


// premier appel
requestAnimationFrame(update);
