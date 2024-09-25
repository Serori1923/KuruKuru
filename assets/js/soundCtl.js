var audioElement = document.getElementById('kurusound');

document.addEventListener('keydown', function(event) {
    var key = event.key;  // 獲取被按下的按鍵

    if (key === "m" || key === "M") {
        audioElement.muted = !audioElement.muted;
    }
});