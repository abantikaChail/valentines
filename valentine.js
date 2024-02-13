function moveButton() {
    var button = document.getElementById('No');
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function play() {
        var video = document.querySelector('video');
        video.play();
    }

function pause() {
        var video = document.querySelector('video');
        video.pause();
    }
