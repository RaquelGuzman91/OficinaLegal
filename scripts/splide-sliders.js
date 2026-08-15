 document.addEventListener('DOMContentLoaded', function () {
            new Splide('.splide', {
                   type       : 'loop',
                perPage    : 3,      // número de imágenes visibles al mismo//  tiempo
                perMove    : 1,      // cuántas se mueven por scroll/click
                autoplay   : true,
                arrows     : true,
                pagination : false,
                gap        : '1rem', // espacio entre imágenes
                interval    : 3000,       // tiempo entre cambios (ms)
                pauseOnHover: true,      // no se detiene al pasar el mouse
                breakpoints: {
                890    : { perPage: 3 }, // en pantallas medianas muestra 3
                645 : { perPage: 2 }, // en tablets muestra 2
                480 : { perPage: 1 }, // en móviles muestra 1
            },              //el fade dura 2 minutos

            }).mount();
        

});