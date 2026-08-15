import { data } from "./data.js";

function crearCopyright(){
    const copyRight = document.getElementById("footer-end");
        copyRight.innerHTML = `
             <main class="footer-main">
            <article class="copyright">
            <h6>Copyright 2026 Silvestre Reyes y Asociados abogados. Todos los derechos reservados <a href="#">WebSystems</a></h6>
        </article>
        <article class="iconos">
            <a href="${data.redes.facebook}" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="${data.redes.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="${data.redes.whatssapp}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        </article>

        </main>
        `; 
}
crearCopyright();