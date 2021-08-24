// notes in order
// G#, A, Bb, B, C, C#, D, Eb, E, F, F#, G
// 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 221  

function playPiano()
{
    window.addEventListener('keydown', checkKeyPress, false);

    function checkKeyPress(key)
    {
        const soundItem = document.querySelector('.list-group-item');
        if(key.keyCode == "65"){
            // highlight list item
            document.querySelector('#audioGSharp').play();
        } else if (key.keyCode == "83"){
            document.querySelector('#audioA').play();
        } else if (key.keyCode == "68"){
            document.querySelector('#audioBb').play();
        } else if (key.keyCode == "70"){
            document.querySelector('#audioB').play();
        } else if (key.keyCode =="71"){
            document.querySelector('#audioC').play();
        } else if (key.keyCode == "72"){
            document.querySelector('#audioCSharp').play();
        } else if (key.keyCode == "74"){
            document.querySelector('#audioD').play();
        } else if (key.keyCode == "75"){
            document.querySelector('#audioEb').play();
        } else if (key.keyCode == "76"){
            document.querySelector('#audioE').play();
        } else if (key.keyCode == "186"){
            document.querySelector('#audioF').play();
        } else if(key.keyCode == "222"){
            document.querySelector(`#audioFSharp`).play();
        } else if(key.keyCode == "221"){
            document.querySelector('#audioG').play();
        }
    }

}







