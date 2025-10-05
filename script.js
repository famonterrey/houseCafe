const navbarLinks = document.querySelectorAll('#navbar li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

const logo = document.querySelector('.logo');
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        navbarLinks.forEach(l => l.classList.remove('active'));
        navbarLinks[0].classList.add('active'); // Home es el primer enlace
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });