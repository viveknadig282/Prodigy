const chatButton = document.getElementById("chat_button")
var roomNum = 1
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function openRoom(event) {
    event.preventDefault();
    window.open(`/room/${roomNum}`, "_blank");
};

chatButton.addEventListener('click', openRoom);
