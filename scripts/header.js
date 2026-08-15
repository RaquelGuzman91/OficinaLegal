import { data } from "./data.js";

function setHeaderLinks (){
    Object.entries(data.links).forEach(([key, href]) => {
        const el = document.getElementById(`header-${key}`);
        if (el) el.href = href;
    });

    Object.entries(data.redes).forEach(([key, href]) => {
        const el = document.getElementById(`red-${key}`);
        if (el) el.href = href;
    })

}

document.addEventListener("DOMContentLoaded" , setHeaderLinks);