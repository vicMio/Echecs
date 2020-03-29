//fichier de jeu

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var side = 1/3 * width

let players = [];


socket.on('players_list', function(list) {
  players = list;
});

//draw le pattern associe au joueur qui joue (un lion ou une croix pour le moment)
function drawCoup(){
  players.forEach(function({c, abs, ord, casePlateau, plateau}) {
    if (abs != -1 && ord != -1 && casePlateau != -1 && plateau[casePlateau] == 0){
    var coup = new Image();
    coup.src = couleur+'.jpeg'; // Image de 80x80 pixels
    coup.addEventListener('load', function() {
        context.drawImage(coup, abs, ord);
      });
    }
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


//indique ou va devoir etre trace le pattern du joueur, selon l endroit ou le joueur a clique
canvas.onclick = function(e) {
  var coords = getCoords(this,e);
  x = coords.x;
  y = coords.y;



  if (0 <= x && x< side){
    if (0<= y && y<side){ //B1
      socket.emit('caseCom',[0, 0, 0]);

    }
    else if(side<= y && y< 2*side){ //A1
      socket.emit('caseCom',[0, side, 1]);

    }
    else{ //colonne 1
      socket.emit('caseCom', [0, 2*side, 2]);

    }
  }
  else if(side <= x && x< 2*side){
    if (0<= y && y<side){ //B1
      socket.emit('caseCom',[side, 0, 3]);

    }
    else if(side<= y && y< 2*side){ //A1
      socket.emit('caseCom',[side, side, 4]);
      //player.abs = side;
    //  player.ord = side;
      //player.casePlateau = 4;
      //player.Plateau[player.casePlateau] = 1;
    }
    else{ //colonne 1
      socket.emit('caseCom', [side, 2*side, 5]);

    }
  }
  else{
    if (0<= y && y<side){ //B1
      socket.emit('caseCom',[2*side, 0, 6]);

    }
    else if(side<= y && y< 2*side){ //A1
      socket.emit('caseCom', [2*side, side, 7]);

    }
    else{ //colonne 1
      socket.emit('caseCom',[2*side, 2*side, 8]);

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
