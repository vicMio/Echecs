const socketio = require('socket.io');

module.exports = function(server) {
  // init socket.io server
  const io = socketio(server);
  // players list
  const players = {};

  // listen for connections
  io.on('connection', function(socket) {
  	console.log('Un utilisateur se connecte');
  	console.log(socket.id)

  	players[socket.id] = {
      pseudo: 'not_defined_yet',
      c: 'not_defined_yet',
      score: 0,
      abs: -1,
      ord: -1,
      casePlateau: -1,
      plateau: [0,0,0,0,0,0,0,0,0]
    };

  	socket.on('nouveau_joueur', function(arr) {
  		players[socket.id].pseudo = arr[0]
    	players[socket.id].c = arr[1]
  	});

  	socket.on('disconnect', function() {
    	console.log('Un utilisateur se deconnecte');
  	});

  	socket.on('chat message', function(data) {
  		io.emit('chat message', data);
		});

		socket.on('caseCom',  function(caseCom) {
      players[socket.id].abs = caseCom[0];
      players[socket.id].ord = caseCom[1];
      players[socket.id].casePlateau = caseCom[2];
      console.log(players[socket.id].casePlateau)
      players[socket.id].plateau[players[socket.id].casePlateau] = 1;
    });

	});

	function update() {
  	io.volatile.emit('players_list', Object.values(players));
  }

  setInterval(update, 1000/60);

};
