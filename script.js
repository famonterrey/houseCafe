const navbarLinks = document.querySelectorAll('#navbar li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });