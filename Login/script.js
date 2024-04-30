
                        //Deslizamiento entre formularios

const signInBtnLink = document.querySelector('.' +
    'signInBtn-link');

const signUpBtnLink = document.querySelector('.' +
    'signUp-link');

const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () =>  {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () =>  {
    wrapper.classList.toggle('active');
});



                        //  Mostrar/Ocultar contraseña

function mostrar() {
    var tipo = document.getElementById("password");

    //Mostrar/Ocultar contraseña

    if(tipo.type === 'password') {
        tipo.type = 'text';

    } else {
        tipo.type = 'password';
    }

    var icon = document.getElementById("icono");

    //CAMBIAR ICONO

    if (icon.className === 'fa-solid fa-eye-slash'){
        icon.className = 'fa-solid fa-eye';

    }else{
        icon.className = 'fa-solid fa-eye-slash';
    }
}
