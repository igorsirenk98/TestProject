$(document).ready(() => {
    $('#scroll-top').hide();
    $('a').on('click', function(event) {
      if (this.hash !== '') {
        let hash = this.hash;

        event.preventDefault();
  
        if (hash === '#header') {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
                $('#scroll-top').hide('slow');
            });
        } else if (hash === '#footer') {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
      }
    });
});

$('body').on('scroll', () => {
    let scrolledDistance = $('#header').offset().top;

    if (scrolledDistance < -200) {
        $('#scroll-top').show('slow');  
    } else {
        $('#scroll-top').hide('slow');
    }
});