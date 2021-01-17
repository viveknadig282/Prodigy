const videoButton = document.getElementById("video_button")

function openVideo(event) {
    event.preventDefault();
    window.open(`https://36b4692e8330.ngrok.io`, "_blank");
}

videoButton.addEventListener('click', openVideo);
