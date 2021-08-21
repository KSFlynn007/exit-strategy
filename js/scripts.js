function quitGame()
{
    let modalTitle = $('.modal-title')
    $('.modal-body').remove();
    $('.modal-footer').remove();

    modalTitle.replaceWith($('<h1 class="goodbyeMessage w-100"> Thank you for playing! </h1>'));

    // close window:
    // setTimeout('self.close()', 2000)
}