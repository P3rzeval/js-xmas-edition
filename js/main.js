const $form = document.querySelector("#carta-a-santa");


const nombre = $form.nombre.value;
let ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if( nombre.length === 0) {
        return "ingrese un minimo de 2 caracteres"
    }
    if( nombre.length >= 50) {
        return "solo puede ingresar un maximo de 50 caracteres"
    }

    return '';
    
};

function validarCiudad(ciudad) {

    if( ciudad === "" ) {
        return "debe selecionar una ciudad"
    }
    return '';
};

function validarComportamiento (comportamiento) {
    if(comportamiento === '' ) {
        return "Seleccione uno de los 3 campos"
    }

    return'';
    
};

function validarRegalo(descripcionRegalo){
    if ( descripcionRegalo.length === 0) {
        return "debe contenter minimo 50 caracteres"
    }
    if( descripcionRegalo.length >= 100) {
        return "solo debe de tener un maximo de 100 caracteres"
    }
   return '';
};

validarNombre(nombre);