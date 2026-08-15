document.addEventListener("click", (e) => {
    if(e.target.id === "button-top") {
        window.scrollTo({top: 0, behavior: "smooth" });
    }
});