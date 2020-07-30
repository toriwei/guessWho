// The file with the client-side JavaScript code for
// sending and receiving messages

/* global io */

let socket;

window.addEventListener("load", () => {
  socket = io.connect("https://guess-who-tori-halle-nathan.glitch.me/");
  // TODO: socket.emit("name", yourName)
  socket.on("message", printMessageFromServer);

  const form = document.querySelector("#question-form");
  const textArea = document.querySelector("#question-form textarea");
  
  form.addEventListener("submit", e => {
    e.preventDefault();
    const message = textArea.value;
    socket.emit("message", message);
    textArea.value = ""
  });
});

function printMessageFromServer({name, message}) {
  // For now, console.log, later add to window
  const chatLine = `${name}: ${message}`;
  console.log(chatLine);
  const chatList = document.querySelector('#chat');
  const line = document.createElement('li')
  line.textContent = chatLine;
  chatList.appendChild(line)
}
