import io from 'socket.io-client';

const socket = io('http://localhost');



var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);


  // game state (players list)
  const players = {};

  io.sockets.on('connection', function(socket) {
    // register new player
    players[socket.id] = {
      pseudo: "",
      couleur: "",
      abs: -1,
      ord: -1,
      casePlateau: -1,
      plateau: [0,0,0,0,0,0,0,0,0],
    };

    socket.on('nouveau', function(pseudo){
      socket.pseudo = pseudo;
      players[socket.id].pseudo = pseudo;
    });

    socket.on('couleur', function(couleur){
      players[socket.id].couleur = couleur;
    });

    socket.on('case',  function(caseCom) {
      players[socket.id].abs = caseCom[0];
      players[socket.id].ord = caseCom[1];
      players[socket.id].casePlateau = caseCom[2];
      players[socket.id].Plateau[players[socket.id].casePlateau] = 1;
    });

    // delete disconnected player
    socket.on('disconnect', function() {
      delete players[socket.id];
    });
  });





server.listen(8080);
