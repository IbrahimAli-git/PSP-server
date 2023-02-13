let character = document.querySelector('.character');
let moveBy = 50;

window.addEventListener('load', () => {
    character.style.position = 'absolute';
    character.style.left = 0;
    character.style.top = 0;
});

$(document).addEventListener('click', function(){
    this.alert("TEst");
})
/*
window.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        character.style.top = parseInt(character.style.top) - moveBy + 'px';
    }
    else if (e.keyCode == '40') {
        character.style.top = parseInt(character.style.top) + moveBy + 'px';
    }
    else if (e.keyCode == '37') {
        haracter.style.left = parseInt(character.style.left) - moveBy + 'px';
    }
    else if (e.keyCode == '39') {
        character.style.left = parseInt(character.style.left) + moveBy + 'px';
    }

}
*/

window.addEventListener('keyup', function(e){
    switch (e.key) {
        case "ArrowLeft":
            character.style.left = parseInt(character.style.left) - moveBy + 'px';
            break
        case "ArrowRight":
            character.style.left = parseInt(character.style.left) + moveBy + 'px';
            break
        case "ArrowUp":
            character.style.top = parseInt(character.style.top) - moveBy + 'px';
            break
        case "ArrowDown":
            character.style.top = parseInt(character.style.top) + moveBy + 'px';
            break
        default:
            break
    }
});
