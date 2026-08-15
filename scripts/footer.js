import { data } from "./data.js";

function crearFooter(){
    const footer = document.getElementById("footer");
    footer.innerHTML = `
         <main>
            <article class="footer-imagen">
                <figure class="footer-img">
                    <img src="./img/LOGO-white.png" alt="">
                </figure>
                <p>Atencion legal personalizada para <br>clientes en Guatemala y el extranjero <br> seguridad juridica en cada decisión.</p>
            </article>
            <article class="footer-info">
                <h5>navegacion</h5>
                <a href="">nosotros</a>
                <a href="${data.links.servicio}">servicios</a>
                <a href="${data.links.quienesSomos}">quienes somos</a>
                <a href="#">valor</a>
                <a href="${data.links.contacto}">contacto</a>
            </article>
            <article class="footer-info">
                <h5>contacto</h5>
                <a href="${data.redes.telefono}" target="_blank">${data.info.telefono}</a>
                <a href="${data.redes.correo}" target="_blank">${data.info.email}</a>
                <a href="${data.redes.map}" target="_blank">${data.info.direccion}</a>
            </article>
        </main>
    `;
}
crearFooter();