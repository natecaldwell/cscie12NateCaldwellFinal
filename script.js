document.addEventListener('DOMContentLoaded', function () {
    var menuContent = document.getElementById("menuContent");
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');
    var darkModeToggle = document.getElementById("darkModeToggle");

    // dark mode
    function toggleDarkMode() {
        var body = document.body;
        body.classList.toggle('dark-mode');
        var isDarkMode = body.classList.contains('dark-mode');
        
        localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');

        if (isDarkMode) {
            darkModeToggle.src = "images2/cactus-lamp-logo-on-new.png";
        } else {
            darkModeToggle.src = "images2/cactus-lamp-logo-off-new.png";
        }
    }

    // dark mode save
    var savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.src = "images2/cactus-lamp-logo-on-new.png";
    }

    // menu
    menuBtn.addEventListener('click', function() {
        menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
    });

    closeBtn.addEventListener('click', function() {
        menuContent.style.display = "none";
    });

    // dark mode listener fix stuff 
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function(event) {
            toggleDarkMode();
            event.stopPropagation();
        });
    }

    // contact page 
    var contactForm = document.getElementById('contactForm');
    var thankYouMessage = document.getElementById('thankYouMessage');

    if (contactForm && thankYouMessage) {
        var pristine = new Pristine(contactForm);

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var valid = pristine.validate();

            if (valid) {
                console.log('Form is valid, showing thank you message.');
                contactForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            } else {
                console.log('Form is invalid. Please correct the errors.');
            }
        });
    }
});
