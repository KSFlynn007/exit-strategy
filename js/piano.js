window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key)
{
    const soundItem = document.querySelector('.list-group-item');
    if(key.keyCode == "65"){
        // highlight list item
        document.querySelector('#audioA').play();
    }
    if(key.keyCode == "66"){
        document.querySelector('#audioB').play();
    }
    if(key.keyCode == '86'){
        document.querySelector('#audioBb').play();
    }
    if(key.keyCode == '88'){
        document.querySelector('#audioCSharp').play();
    }
    if(key.keyCode == '67'){
        document.querySelector('#audioC').play();
    }

    
}
// case here to alternate between keys?
// if (key.keyCode == '65'){
//     // play a
//     // highlight list item on screen
// }
// if (keycode == 66){
//     // play b
// }



