const header = document.querySelector(".header");
const panel = document.querySelector(".links");

export default function menuHamburger(btnHamburger, nav, navlink){
    document.addEventListener("click" , (e) => {
        if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`) ){
            document.querySelector(nav).classList.toggle("is-active");
            document.querySelector(btnHamburger).classList.toggle("is-active");
        }
        if(e.target.closest(navlink)) {
            e.preventDefault();
            const link = e.target.closest(navlink);
            document.querySelector(nav).classList.remove("is-active");
            document.querySelector(btnHamburger).classList.remove("is-active");

            setTimeout(() => {
                if(link.target === "_blank"){
                    window.open(link.href, "_blank");
                }else {
                    window.location.href = e.target.href;
                }
            }, 300);
        }
        else if(!e.target.closest(nav) && !e.target.closest(btnHamburger)){
            document.querySelector(nav).classList.remove("is-active");
            document.querySelector(btnHamburger).classList.remove("is-active")
        }

    });
}