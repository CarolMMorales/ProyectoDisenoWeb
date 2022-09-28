'use strict';
const form= document.getElementById('formReg');
const usuarioo= document.getElementById('txtUsuario');
const clave= document.getElementById('txtClave');
const conClave= document.getElementById('txtClaveDos');
const email=document.getElementById('txtCorreo');
const objectValid={
    usuarios: false,
    claveUno: false,
    claveDos: true,
    correo: false
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
/*
conClave.addEventListener('change',(e)=>{
    console.log(e.target.value);
    if(conClave === clave){
        objectValid.claveUno = true;
    }
    console.log(Object.values(objectValid));
});*/

email.addEventListener('change',function(e){
    console.log(e.target.value);
    const emailRegex = /^([-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63})$/i;
    objectValid.correo = e.target.value.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));
});