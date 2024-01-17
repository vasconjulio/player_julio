
document.getElementById('play').addEventListener('click', function() {
    const playIcon = document.getElementById('play-icon');
    const audio = document.getElementById('audio');

    if (audio.paused) {
      audio.play();
      playIcon.className = 'bi bi-pause-circle-fill';
    } else {
      audio.pause();
      playIcon.className = 'bi bi-play-circle-fill';
    }
  });