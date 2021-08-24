function playPiano()
{
    function cloneAndPlay(audioNode)
    {
        var clone = audioNode.cloneNode(true);
        clone.play();
    }

    $(document).keydown(function(event) {
 
        var key = (event.keyCode ? event.keyCode : event.which);

        // LOW NOTE

        if(key == '65'){
            // a
            cloneAndPlay(FLow)
        }
        if(key == '87'){
            // w
            cloneAndPlay(GLow)
        }
        if(key == '83'){
            // s
            cloneAndPlay(ASharp)
        }
        if(key == '69'){
            // e
            cloneAndPlay(GSharpmLow)
        }
        if(key == '68'){
            // d
            cloneAndPlay(CSharpm)
        }
        if(key == '82'){
            // r
            cloneAndPlay(DSharp)
        }
        if(key == '70'){
            // f
            cloneAndPlay(C)
        }


        // HI NOTE

        if(key == '72'){
            // h
            cloneAndPlay(G)
        }
        if(key == '85'){
            // u
            cloneAndPlay(Em)
        }
        if(key == '74'){
            // j
            cloneAndPlay(F)
        }
        if(key == '73'){
            // i
            cloneAndPlay(GSharpm)
        }
        if(key == '75'){
            // k
            cloneAndPlay(Gm)
        }
        if(key == '79'){
            // o
            cloneAndPlay(A)
        }
        if(key == '76'){
            // l
            cloneAndPlay(Cm)
        }
    
    });
   
    
}


