const contenedores = document.querySelectorAll('.effect');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

contenedores.forEach (c => observer.observe(c));