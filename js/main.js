$(document).ready(function(){   
   // Using the core $.ajax() method
    $.ajax({

        // The URL for the request
        url: "php/main.php",

        // The data to send (will be converted to a query string)
        data: {
            id: 123
        },

        // Whether this is a POST or GET request
        type: "GET",

        // The type of data we expect back
        dataType : "json",

        // Code to run if the request succeeds;
        // the response is passed to the function
        success: function( json ) {
            $( "<h1>" ).text( json.name).appendTo( "#main_container" );
            $( "<div class=\"content\">").html( json.surname ).appendTo( "body" );
        },

        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        error: function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        },

        // Code to run regardless of success or failure
        complete: function( xhr, status ) {
            //alert( "The request is complete!" );
        }
    });
   // $(".sidebar").html("This is Hello World by JQuery");
   //$("#main_container").append("Hello jquery!");
   //console.log("To console form main.js");
    
   /*
   $.get( "php/main.php", function( response ) {
       $("#main_container").append(response);
       console.log( response ); // server response
   });
    
    */
});