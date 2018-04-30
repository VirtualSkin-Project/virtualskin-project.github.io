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
            if (msg && msg.status)
                toastr.success("Thanks, it was written in our hearts forever");
            else
                toastr.warning("Oh no, we lost your address");
        });
        $(modal).modal('hide');
    });
});
