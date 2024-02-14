function moveButton() {
    var button = document.getElementById('no');
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function showGifPopup() {
    Swal.fire({
        title: 'Custom GIF Popup',
        imageUrl: 'gif2.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom GIF',
        confirmButtonText: 'Close'
    }
    ).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.gif-container img').src = 'Static/gif3.jfif';
        }
    });
    }
