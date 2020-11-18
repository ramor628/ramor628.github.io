window.onload = function() {
    var button = document.body.getElementById('button1');
    var sound = document.body.getElementById("A")
}

document.getElementById('game').onmousemove = musicNote.mouseMove;

musicNote.mouseMove = function(mouseMovement) {
    const note = document.getElementById('note');
    let xPosition;
    let yPosition;
    if (mouseMovement) {
        xPosition = mouseMovement.pageX;
        yPosition = mouseMovement.pageY;
        note.style.top = yPosition + 1 + 'px';
        note.style.left = xPosition + 'px';
    };
};