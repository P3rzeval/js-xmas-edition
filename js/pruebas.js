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

probarValidarNombre();
