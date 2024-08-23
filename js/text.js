document.addEventListener("DOMContentLoaded", function () {
    // Elementos animáveis
    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    const temas = document.querySelectorAll('.tema');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observar elementos que precisam de animação
    animatableElements.forEach(element => {
        observer.observe(element);
    });

    // Observar temas
    temas.forEach(tema => {
        observer.observe(tema);
    });

    // Animação do header e título da homepage
    const header = document.querySelector('.main-header');
    const title = document.querySelector('.home-title');

    if (header) {
        header.classList.add('animate');
    }

    if (title) {
        title.classList.add('animate');
    }
});
//sections-pattern 
document.addEventListener('DOMContentLoaded', () => {
    const animateItems = document.querySelectorAll('.section-pattern .animate-item');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateItems.forEach(item => {
        observer.observe(item);
    });
});
//negritude
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-negritude .fade-in, .section-negritude .fade-in-up, .section-negritude .slide-in, .section-negritude .zoom-in');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navList = document.querySelector('.nav-list');
    const homeTitle = document.querySelector('.home-title');

    menuHamburguer.addEventListener('click', function() {
        // Alterna a classe 'aberto' no menu hamburguer
        menuHamburguer.classList.toggle('aberto');
        // Alterna a classe 'aberto' na lista de navegação
        navList.classList.toggle('aberto');

        // Adiciona ou remove a classe 'hide-title' no título
        if (navList.classList.contains('aberto')) {
            homeTitle.classList.add('hide-title');
        } else {
            homeTitle.classList.remove('hide-title');
        }
    });
});
