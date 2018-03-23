$('#emailModal').on('shown.bs.modal', function () {
    $(this).off('submit', '#emailForm').on('submit', '#emailForm', function(event) {
        event.preventDefault();
        var modal = $(this).closest('.modal');
        var email = $('.modal-body #email').val();
        $.ajax({
            method: "GET",
            url: "https://virtualskin-mail.herokuapp.com/add",
            data: { email: email }
        }).done(function( msg ) {
            alert( "Data Saved: " + msg[status] );
        });
        $(modal).modal('hide');
    });
});
