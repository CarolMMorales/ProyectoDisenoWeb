'use strick';
//datos cliente
const form = document.getElementById('formSub');
const names = document.getElementById('name');
const descrip = document.getElementById('descrip');
var image = document.getElementById('imagen');
const categ=document.getElementById('categoria');
//datos pago
const subastador = document.getElementById('inputName');
const email = document.getElementById('inputMail');
const tarjeta = document.getElementById('cardOp');
const numTarjeta = document.getElementById('nCard');
const numSeguridad = document.getElementById('security');
const policy = document.getElementById('checkPolitica');

const objectValid={
    nPintura: false,
    descripcion: false,
    imagen: false,
    categoria:false,
    nSubastador: false,
    correo: false,
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
names.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.nPintura = e.target.value.match(namesRegex) ? true : false;
    console.log(Object.values(objectValid));
});
descrip.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const descripRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,100})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,100})$/g;
    objectValid.descripcion = e.target.value.match(descripRegex) ? true : false;
    console.log(Object.values(objectValid));
});
categ.addEventListener('change', (e)=>{
    let select = document.getElementById('categoria');
    if (select.value) {
        objectValid.categoria = true;
    } else {
        objectValid.categoria = false;
    }
    console.log(Object.values(objectValid));
});
image.addEventListener('change', function () {
        
    var filePath = this.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
        objectValid.value = false;
        
    }else{
        alert('Extensión correcta.');
        objectValid.imagen = true;
        
    }

});

subastador.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const subastadorRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.nSubastador = e.target.value.match(subastadorRegex) ? true : false;
    console.log(Object.values(objectValid));
});
email.addEventListener('change',function(e){
    console.log(e.target.value);
    const emailRegex = /^([-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63})$/i;
    objectValid.correo = e.target.value.match(emailRegex) ? true : false;
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
