const socket = new WebSocket("ws://localhost:3000");
// socket.onopen=function(event){
//     alert("socket is connected successfully")
//     socket.send("hey")
//     console.log(event)
// }
const message = document.getElementById("logs");
socket.onmessage = function (event) {
  console.log(event);
  message.innerHTML += event.data + "<br>";
};
document.getElementById("send").onclick = function () {
  const text = document.getElementById("msg").value;
  message.innerHTML += "You:-" + text + "<br>";
  socket.send(text);
};

console.log("new line added");
