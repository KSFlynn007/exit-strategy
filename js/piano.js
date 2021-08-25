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
            $("#sat-FLow").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-FLow").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(FLow)
        }
        if(key == '87'){
            // w
            $("#sat-GLow").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GLow").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(GLow)
        }
        if(key == '83'){
            // s
            $("#sat-ASharp").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-ASharp").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(ASharp)
        }
        if(key == '69'){
            // e
            $("#sat-GSharpMLow").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GSharpMLow").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(GSharpmLow)
        }
        if(key == '68'){
            // d
            $("#sat-CSharpM").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-CSharpM").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(CSharpm)
        }
        if(key == '82'){
            // r
            $("#sat-DSharp").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-DSharp").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(DSharp)
        }
        if(key == '70'){
            // f
            $("#sat-C").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-C").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(C)
        }


        // HI NOTE

        if(key == '72'){
            // h
            $("#sat-G").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-G").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(G)
        }
        if(key == '85'){
            // u
            $("#sat-Em").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-Em").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(Em)
        }
        if(key == '74'){
            // j
            $("#sat-F").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-F").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(F)
        }
        if(key == '73'){
            // i
            $("#sat-GSharpM").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GSharpM").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(GSharpm)
        }
        if(key == '75'){
            // k
            $("#sat-GM").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GM").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(Gm)
        }
        if(key == '79'){
            // o
            $("#sat-A").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-A").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(A)
        }
        if(key == '76'){
            // l
            $("#sat-Cm").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-Cm").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(Cm)
        }
    
    });
   
    
}


