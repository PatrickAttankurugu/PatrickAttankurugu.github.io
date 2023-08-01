$(document).ready(function() {
    // Event listener for form submission
    $('#waitlist-form').on('submit', function(e) {
        e.preventDefault();

        // Input fields
        let name = $('#name');
        let email = $('#email');

        // Email regex pattern
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Check if the inputs are filled out
        if(name.val() === "" || email.val() === "") {
            alert('Please fill out all fields.');
            return;
        }

        // Check if the email address is in the correct format
        if(!email.val().match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Prepare data to send
        let dataToSend = {
            name: name.val(),
            email: email.val()
        };

        // Make a POST request to your backend
        $.ajax({
            type: "POST",
            url: "YOUR_BACKEND_URL",
            data: JSON.stringify(dataToSend),
            contentType: "application/json",
            success: function() {
                alert('Thank you for signing up for the waitlist. We will notify you when the software is ready for testing.');
                name.val('');
                email.val('');
            },
            error: function() {
                alert('There was an error processing your request. Please try again.');
            }
        });
    });
});
