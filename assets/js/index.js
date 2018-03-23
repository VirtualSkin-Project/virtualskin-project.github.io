$('#emailModal').on('shown.bs.modal', function () {
    $(this).off('submit', '#emailForm').on('submit', '#emailForm', function (event) {
        event.preventDefault();
        var modal = $(this).closest('.modal');
        var email = $('.modal-body #email').val();
        $.ajax({
            method: "POST",
            url: "https://virtualskin-mail.herokuapp.com/add",
            data: {email: email}
        }).done(function (msg) {
            console.log(msg);
        });
        $(modal).modal('hide');
    });
});
