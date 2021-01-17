const chatButton = document.getElementById("chat_button")
var roomNum = 1
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function openRoom(event) {
    event.preventDefault();
    window.open(`http://8d7219d00c2c.ngrok.io/room/${roomNum}`, "_blank");
};

chatButton.addEventListener('click', openRoom);
