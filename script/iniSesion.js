'use strict';
const usuario= document.getElementById('txtUsuario');
const clave= document.getElementById('txtClave');
const policy = document.getElementById('checkPolitica');
const objectValid={
    usuario: false,
    clave: false,
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
usuario.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const usuarioRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.usuario = e.target.value.match(usuarioRegex) ? true : false;
    console.log(Object.values(objectValid));
});

clave.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const claveRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ0-9]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.claveUno = e.target.value.match(claveRegex) ? true : false;
    console.log(Object.values(objectValid));
});
policy.addEventListener('change',function(e){
    objectValid.politica=e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});
