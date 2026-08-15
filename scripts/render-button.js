
function renderButton (){
    const buttonCopy = document.getElementById("section-button");
        buttonCopy.innerHTML = `
            <button id="button-top" class="button-top"><i class="fa-solid fa-angle-up"></i></button>
        `;   
}

renderButton();