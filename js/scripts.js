let startDate = new Date();
let startTime = startDate.getTime();


function pauseGame()
{
    // get time from the moment user clicks "exit game" button
    let stopDate = new Date();
    let stopTime = stopDate.getTime();
    
    // subtract end time from start time of entering page (in ms)
    let millis = stopTime - startTime;

    // convert ms
    let time = msConversion(millis);

    // convert minutes only for if statement
    let minutes = Math.floor(millis / 60000);

    let modalBody = $('.modal-body');
    modalBody.empty();

    if(minutes >= 3){
        modalBody.replaceWith($("<p class='modal-body'> You've been here for " + time + ". </p>"));
    } else if(minutes <= 3){
        modalBody.replaceWith($("<p class='modal-body'> You've only been here for " + time + ". </p>"));
    }
}

function msConversion(millis) {
    let sec = Math.floor(millis / 1000);
    let hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;

    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);

    if (hrs > 0) {
        let time = hrs + ":" + min + ":" + sec;
        return time;
    }
    else {
        let time = min + ":" + sec;
        return time;
    }

}

function quitGame()
{
    let modalTitle = $('.modal-title');
    $('.modal-body').remove();
    $('.modal-footer').remove();

    modalTitle.replaceWith($('<h1 class="goodbyeMessage w-100"> Thank you for playing! </h1>'));

    // close window:
    setTimeout('self.close()', 1500);
}