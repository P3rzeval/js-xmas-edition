function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'ingrese un minimo de 2 caracteres',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'solo puede ingresar un maximo de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

function probarValidarCiudad () {
    console.assert( 
        validarCiudad('') === 'debe selecionar una ciudad' ,
        'la funcion validar ciudad no valido la selecion de ciudad'
    );
}

function probarValidarComportamiento () {
    console.assert (
        validarComportamiento('') === 'Seleccione uno de los 3 campos' ,
        'La funcion validar comportamiento no valido '
    );
}

function probarValidarRegalo () {
    console.assert(
        validarRegalo('') ===  'debe contenter minimo 50 caracteres',
        'la funcion validar regalo no esta validando el minimo de caracteres'
    );
    console.assert(
        validarRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'solo debe de tener un maximo de 100 caracteres',
        'la funcion validar regalo no esta validando el maximo de caracteres'
    );
}
probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarRegalo();