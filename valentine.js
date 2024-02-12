document.getElementById('No').addEventListener('mouseover', function() {
    this.classList.add('move');
    document.getElementById('Yes').classList.remove('move');
});

// document.getElementById('Yes').addEventListener('mouseover', function() {
//     this.classList.add('move');
//     document.getElementById('No').classList.remove('move');
// });

document.getElementById('No').addEventListener('click', function(e) {
    e.preventDefault();
});

// document.getElementById('Yes').addEventListener('click', function(e) {
    // e.preventDefault();
// });
