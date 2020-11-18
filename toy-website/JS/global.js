window.addEventListener("load", function() {
    var image = document.getElementById('image-container');
    var image = document.getElementById('note');
}

function follow(e) {

    var x = e.x;
    var y = e.y;

    image.style.left = x + 'px';
    image.style.top = y + 'px';
}

document.body.addEventListener('mousemove', follow);