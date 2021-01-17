const videoButton = document.getElementById("video_button")

function openVideo(event) {
    event.preventDefault();
    window.open(`https://7f6e9c613121.ngrok.io`, "_blank");
}

videoButton.addEventListener('click', openVideo);
