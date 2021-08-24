// notes in order
// G#, A, Bb, B, C, C#, D, Eb, E, F, F#, G
// 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 221  

function playPiano()
{
    function cloneAndPlay(audioNode)
    {
        var clone = audioNode.cloneNode(true);
        clone.play();
    }

    $(document).keydown(function(event) {
 
        var key = (event.keyCode ? event.keyCode : event.which);

        if (key == '65'){
            cloneAndPlay(GSharp);
        }
        if (key == '83'){
            cloneAndPlay(A);
        }
        if (key == '68'){
            cloneAndPlay(Bb);
        }
        if (key == '70'){
            cloneAndPlay(B);
        }
        if (key == '71'){
            cloneAndPlay(C);
        }
        if (key == '72'){
            cloneAndPlay(CSharp);
        }
        if (key == '74'){
            cloneAndPlay(D)
        }
        if (key == '75'){
            cloneAndPlay(Eb)
        }
        if (key == '76'){
            cloneAndPlay(E)
        }
        if (key == '186'){
            cloneAndPlay(F)
        }
        if (key == '222'){
            cloneAndPlay(FSharp)
        }
        if (key == '221'){
            cloneAndPlay(G)
        }
    
    });
   
    
}






