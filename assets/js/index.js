$('#emailModal').on('shown.bs.modal', function () {
    $(this).off('submit', '#emailForm').on('submit', '#emailForm', function(event) {
        event.preventDefault();
        var modal = $(this).closest('.modal');
        var email = $('.modal-body #email').val();
        console.log(email);
        $(modal).modal('hide');
    });
});
