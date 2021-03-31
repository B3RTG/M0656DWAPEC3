// modifico el tipo de dato del segundo numero de a,
// asi hacemos que a se infierra como "string" y no numero
const a = 1 + "2";
//como resultado del cambio anterior, b tambien será string
const b = a + 3;
const c = {
  apple: a,
  banana: b
};
// al intentar hacer una o númerica con un campo de tipo "string"
// tenemos un error de tipo de datos.
const d = c.apple * 4;
