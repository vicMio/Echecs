//const socket = io();

send.onsubmit = function(event) {
  // prevent page reloading
  event.preventDefault();
  // emit "chat message" event
  // and pass an object with the message
  socket.emit('chat message', { msg: message.value });
  // reset input
  message.value = '';
};

socket.on('chat message', function(data) {
  // create an <li> element
  const li = document.createElement('li');
  // set innerText with the message
  li.innerText = data.msg;
  // append it to the chat
  chat.appendChild(li);
});