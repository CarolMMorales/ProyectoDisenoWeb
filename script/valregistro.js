'use strict';
const form= document.getElementById('formReg');
const usuarioo= document.getElementById('txtUsuario');
const clave= document.getElementById('txtClave');
const email=document.getElementById('txtCorreo');
const policy = document.getElementById('checkPolitica');
const objectValid={
    usuarios: false,
    claveUno: false,
    correo: false,
    politica:false
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validForm()===-1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
});

const validForm=() =>{
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
    return response;
}
usuarioo.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const usuarioRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.usuarios = e.target.value.match(usuarioRegex) ? true : false;
    console.log(Object.values(objectValid));
});
clave.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const claveRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ0-9]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.claveUno = e.target.value.match(claveRegex) ? true : false;
    console.log(Object.values(objectValid));
});


email.addEventListener('change',function(e){
    console.log(e.target.value);
    const emailRegex = /^([-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63})$/i;
    objectValid.correo = e.target.value.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));
});
policy.addEventListener('change',function(e){
    objectValid.politica=e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});