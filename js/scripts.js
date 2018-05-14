(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    $('#alertModal').on('shown.bs.modal', function () {
        $(this).off('submit', '#emailForm').on('submit', '#emailForm', function (event) {
            event.preventDefault();
            var modal = $(this).closest('.modal');
            var name = $('.modal-body #name').val();
            var email = $('.modal-body #email').val();
            var phone = $('.modal-body #phone').val();
            var msg = $('.modal-body #msg').val();
            $.ajax({
                method: "POST",
                url: "https://virtualskin-mail.herokuapp.com/add",
                data: {name: name, email: email, phone: phone, msg: msg}
            }).done(function (msg) {
                if (msg && msg.status)
                    toastr.success("Thanks, it was written in our hearts forever");
                else
                    toastr.warning("Oh no, we lost your address");
            });
            $(modal).modal('hide');
        });
    });

})(jQuery);