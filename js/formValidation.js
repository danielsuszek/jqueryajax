$(document).ready(function () {
    $('form').submit(function (event) {
        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'superheroAlias': $('input[name=superheroAlias]').val()
        }


        // process the form
        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'php/main.php', // the url where we want to POST
            data: formData, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true
        })

        .done(function (data) {

            // log data to the console so we can see
            console.log("from .done()");
            console.log(data);

            // here we will handle errors and validation messages
            if (!data.success) {
                // add the error class to show red input
                $('#name-group').addClass('has-error');
                // add the actual error message under our input
                $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>');
            }
        });

        event.preventDefault();

    }); // ('form').submit(function (event)
});