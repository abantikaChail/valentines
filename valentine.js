function moveButton() {
    var button = document.getElementById('myButton');
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
