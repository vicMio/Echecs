


const coordonnes = {} ;
const clic = [] ;

//definition plateau joueur/ses pions
const player = {
  pseudo: "eriot",
  couleur: "grey",

  //plateau
  A1: "tourG",
  A2: "cavalierG",
  A3: "fouG",
  A4: "reine",
  A5: "roi",
  A6: "fouD",
  A7: "cavalierD",
  A8: "tourD",
  B1: "pion1",
  B2: "pion2",
  B3: "pion3",
  B4: "pion4",
  B5: "pion5",
  B6: "pion6",
  B7: "pion7",
  B8: "pion8",
  C1: "",
  C2: "",
  C3: "",
  C4: "",
  C5: "",
  C6: "",
  C7: "",
  C8: "",
  D1: "",
  D2: "",
  D3: "",
  D4: "",
  D5: "",
  D6: "",
  D7: "",
  D8: "",
  E1: "",
  E2: "",
  E3: "",
  E4: "",
  E5: "",
  E6: "",
  E7: "",
  E8: "",
  F1: "",
  F2: "",
  F3: "",
  F4: "",
  F5: "",
  F6: "",
  F7: "",
  F8: "",
  G1: "",
  G2: "",
  G3: "",
  G4: "",
  G5: "",
  G6: "",
  G7: "",
  G8: "",
  H1: "",
  H2: "",
  H3: "",
  H4: "",
  H5: "",
  H6: "",
  H7: "",
  H8: "",



  pion1: [0, 480],
  pion2: [80, 480],
  pion3: [160, 480],
  pion4: [240, 480],
  pion5: [320, 480],
  pion6: [400, 480],
  pion7: [480, 480],
  pion8: [560, 480],

  tourG: [0, 560],
  cavalierG: [80, 560],
  fouG: [160, 560],
  reine: [240, 560],
  roi: [320, 560],
  fouD: [400, 560],
  cavalierD: [480, 560],
  tourD: [560, 560],


};

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

function drawPlayers() {
  const {pion1, pion2, pion3, pion4, pion5, pion6, pion7, pion8, tourG, cavalierG, fouG, reine, roi, fouD, cavalierD, tourD, couleur} = player;
  context.fillStyle = couleur;

  var pion1 = new Image();
  pion1.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion1.addEventListener('load', function() {
      context.drawImage(pion1, pion1[0], pion1[1]);
      coordonnes["pion1"] = [pion1[0], pion1[1]];
    });

  var pion2 = new Image();
  pion2.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion2.addEventListener('load', function() {
      context.drawImage(pion2, pion2[0], pion2[1]);
      coordonnes["pion2"] = [pion2[0], pion2[1]];
    });

  var pion3 = new Image();
  pion3.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion3.addEventListener('load', function() {
      context.drawImage(pion3, pion3[0], pion3[1]);
      coordonnes["pion3"] = [pion3[0], pion3[1]];
    });

  var pion4 = new Image();
  pion4.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion4.addEventListener('load', function() {
      context.drawImage(pion4, pion4[0], pion4[1]);
      coordonnes["pion4"] = [pion4[0], pion4[1]];
    });

  var pion5 = new Image();
  pion5.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion5.addEventListener('load', function() {
      context.drawImage(pion5, pion5[0], pion5[1]);
      coordonnes["pion5"] = [pion5[0], pion5[1]];
    });

  var pion6 = new Image();
  pion6.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion6.addEventListener('load', function() {
      context.drawImage(pion6, pion6[0], pion6[1]);
      coordonnes["pion6"] = [pion6[0], pion6[1]];
  });

  var pion7 = new Image();
  pion7.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion7.addEventListener('load', function() {
      context.drawImage(pion7, pion7[0], pion7[1]);
      coordonnes["pion7"] = [pion7[0], pion7[1]];
  });

  var pion8 = new Image();
  pion8.src = 'pionNoir.png'; // Image de 80x80 pixels
  pion8.addEventListener('load', function() {
      context.drawImage(pion8, pion8[0], pion8[1]);
      coordonnes["pion8"] = [pion8[0], pion8[1]];
  });

  var tourG = new Image();
  tourG.src = 'tourNoir.png'; // Image de 80x80 pixels
  tourG.addEventListener('load', function() {
  context.drawImage(tourG, tourG[0], tourG[1]);
  });

  var tourD = new Image();
  tourD.src = 'tourNoir.png'; // Image de 80x80 pixels
  tourD.addEventListener('load', function() {
  context.drawImage(tourD, tourD[0], tourD[1]);
  });

  var cavalierG = new Image();
  cavalierG.src = 'cavalierNoir.png'; // Image de 80x80 pixels
  cavalierG.addEventListener('load', function() {
  context.drawImage(cavalierG, cavalierG[0], cavalierG[1]);
  });

  var cavalierD = new Image();
  cavalierD.src = 'cavalierNoir.png'; // Image de 80x80 pixels
  cavalierD.addEventListener('load', function() {
  context.drawImage(cavalierD, cavalierD[0], cavalierD[1]);
  });

  var fouG = new Image();
  fouG.src = 'fouNoir.png'; // Image de 80x80 pixels
  fouG.addEventListener('load', function() {
  context.drawImage(fouG, fouG[0], fouG[1]);
  });

  var fouD = new Image();
  fouD.src = 'fouNoir.png'; // Image de 80x80 pixels
  fouD.addEventListener('load', function() {
  context.drawImage(fouD, fouD[0], fouD[1]);
  });

  var reine = new Image();
  reine.src = 'reineNoir.png'; // Image de 80x80 pixels
  reine.addEventListener('load', function() {
  context.drawImage(reine, reine[0], reine[1]);
  });

  var roi = new Image();
  roi.src = 'roiNoir.png'; // Image de 80x80 pixels
  roi.addEventListener('load', function() {
  context.drawImage(roi, roi[0], roi[1]);
  });

}

function update() {
  drawPlayers();                                    // 2.
  requestAnimationFrame(update);                    // 3.
}


function getCoords(el,event) {
  var ox = el.scrollLeft - el.offsetLeft,
  oy = el.scrollTop - el.offsetTop;
  while(el=el.offsetParent){
    ox += el.scrollLeft - el.offsetLeft;
    oy += el.scrollTop - el.offsetTop;
  }
  return {x:event.clientX + ox , y:event.clientY + oy};
}


// Exemple d'utilisation :

var canvas  = document.querySelector('#canvas');
canvas.onclick = function(e) {

  var context = canvas.getContext('2d');
  var coords = getCoords(this,e);
  const {A1, A2, A3, B1, C1, D1} = player;
  var piece ="";

  x = coords.x;
  y = coords.y;

  if (0 <= x && x< 80){
    if (480<= y && y<560){ //B1
      context.fillStyle = "yellow";
      context.beginPath();
      context.rect(0, 480, 80, 80);
      context.fill();
      if (A1 != ""){

      }

    }
    else if(560<= y && y< 640){ //A1
      context.fillStyle = "green";
      context.beginPath();
      context.rect(0,560, 80,80);
      context.fill();
    }
    else{ //colonne 1
      context.fillStyle = "pink";
      context.beginPath();
      context.rect(0, y, 80,80);
      context.fill();
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
  else if(160 <= x && x< 240){
    if (480<= y <560){

    }
    else if(560<= y < 640){

    }
    else{

    }
  }
  else if(240 <= x && x< 320){
    if (480<= y <560){

    }
    else if(560<= y < 640){

    }
    else{

    }
  }
  else if(320 <= x && x< 400){
    if (480<= y <560){

    }
    else if(560<= y < 640){

    }
    else{

    }
  }
  else if(400 <= x && x< 480){
    if (480<= y <560){

    }
    else if(560<= y < 640){

    }
    else{

    }
  }
  else if(480 <= x && x< 560){
    if (480<= y <560){

    }
    else if(560<= y < 640){

    }
    else{

    }
  }
  else if(560 <= x && x< 640){
    if (480<= y <560){

    }
    else if(560<= y < 640){

    }
    else{

    }
  }
  else{
    if (480<= y <560){

    }
    else if(560<= y < 640){

    }
    else{

    }
  }


};







function moveElement() {

}














// first call
requestAnimationFrame(update);
