$(document).ready(function() {
    // Hide the elements initially
    $('#hero .display-4, #hero .lead').hide();

    // Fade in the elements
    $('#hero .display-4, #hero .lead').fadeIn(2000);

    // Smooth scrolling on scroll-to-top click
    $(document).on('click', '#back-to-top', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // Display or hide scroll-to-top button 
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });

    // When a user hovers over a project card, change its opacity
    $(".card").hover(
        function() {
            $(this).stop().animate({opacity: 0.5}, 200);
        },
        function() {
            $(this).stop().animate({opacity: 1}, 200);
        }
    );

    // Blog button event listener
    document.querySelector('#blog1').addEventListener('click', function() {
        window.location.href = 'blog1.html';
    });
});

document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Input fields
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    // Email regex pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Check if the inputs are filled out
    if(name.value === "" || email.value === "" || message.value === "") {
        alert('Please fill out all fields.');
        return;
    }

    // Check if the email address is in the correct format
    if(!email.value.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all inputs are valid, show a success message
    alert('Message sent successfully!');
    name.value = '';
    email.value = '';
    message.value = '';
});
