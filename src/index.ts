let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let btnEnviar = document.getElementById("enviar");

rotulo1.innerHTML = "INGRESE EL PRIMER NUMERO";
rotulo2.innerHTML = "INGRESE EL SEGUNDO NUMERO";
rotulo3.innerHTML = "INGRESE EL TERCER NUMERO";

btnEnviar.addEventListener("click", () => {
  let primernumero: number = Number(dato1.value);
  let segundonumero: number = Number(dato2.value);
  let tercernumero: number = Number(dato3.value);
  if (primernumero > segundonumero && primernumero > tercernumero) {
    console.log("El primer numero es el mayor");
  } else if (segundonumero > primernumero && segundonumero > tercernumero) {
    console.log("El segundo numero es el mayor");
  } else if (tercernumero > primernumero && tercernumero > segundonumero) {
    console.log("El tercer numero es el mayor");
  }
});
