function addMessage() {
  var msg = 'Welcome to';
  var el = document.getElementById('message');
  el.textContent = msg;
}

addMessage();

function callMessage() {
  el.textContent = newMessage;
  return addMessage();
}