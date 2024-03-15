$(document).ready(function() {
    // Hide the elements initially
    $('#hero .display-4, #hero .lead').hide();


    // Dynamic text change based on user interaction
    function updateDynamicText() {
        const texts = [
            "An AI and Software Developer",
            "Dedicated to driving innovation forward",
            "Fighting crime with AI",
            "Automating agriculture with AI",
            "Empowering businesses with AI",
            "A hand you can hold"
        ];
        let count = 0;
        setInterval(() => {
            $('#dynamic-text').fadeOut(function() {
                $(this).text(texts[count % texts.length]).fadeIn();
            });
            count++;
        }, 3000);
    }
    updateDynamicText();

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
        window.location.href = 'agritech.html';
    });

    
});
