function play() {
    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
    document.getElementById('audio_play').play()
}

function pause() {
    document.getElementById('play').style.display = 'block'
    document.getElementById('pause').style.display = 'none'
    document.getElementById('audio_play').pause()
}