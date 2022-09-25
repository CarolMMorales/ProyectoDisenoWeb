'use strict';
const form = document.getElementById('formPago');
const comprador = document.getElementById('inputName');
const email = document.getElementById('inputMail');
const tarjeta = document.getElementById('cardOp');
const numTarjeta = document.getElementById('nCard');
const numSeguridad = document.getElementById('security');
const policy = document.getElementById('checkPolitica');
const tDocument = document.getElementById('documentId');
const nDocument = document.getElementById('identity');
const objectValid={
    nComprador: false,
    correo: false,
    tipDocument: false,
    numDocument: false,
    tTarjeta: false,
    nTarjeta: false,
    nSeguridad: false,
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
comprador.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const compradorRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.nComprador = e.target.value.match(compradorRegex) ? true : false;
    console.log(Object.values(objectValid));
});
email.addEventListener('change',function(e){
    console.log(e.target.value);
    const emailRegex = /^([-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63})$/i;
    objectValid.correo = e.target.value.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));
});
tDocument.addEventListener('change', (e)=>{
    let select = document.getElementById('documentId');
    if (select.value) {
        objectValid.tipDocument = true;
    } else {
        objectValid.tipDocument = false;
    }
    console.log(Object.values(objectValid));
});
nDocument.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const nDocumetRegex = /^([1-9]{7,10})$/g;
    objectValid.numDocument = e.target.value.match(nDocumetRegex) ? true : false;
    console.log(Object.values(objectValid));
});
tarjeta.addEventListener('change', (e)=>{
    let select = document.getElementById('cardOp');
    if (select.value) {
        objectValid.tTarjeta = true;
    } else {
        objectValid.tTarjeta = false;
    }
    console.log(Object.values(objectValid));
});
numTarjeta.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const numTarjetaRegex = /^([1-9]{14,19})$/g;
    objectValid.nTarjeta = e.target.value.match(numTarjetaRegex) ? true : false;
    console.log(Object.values(objectValid));
});
numSeguridad.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const numSeguridadRegex = /^([1-9]{14,19})$/g;
    objectValid.nSeguridad = e.target.value.match(numSeguridadRegex) ? true : false;
    console.log(Object.values(objectValid));
});

policy.addEventListener('change',function(e){
    objectValid.politica=e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});