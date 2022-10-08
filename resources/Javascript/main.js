/* declarando constantes base */
const UVA = 18 / 100;
const Especial = 36 / 100;
const IUDU = 50 / 100;
const Santander = 55.5 / 100;
setTimeout(()=>{
  console.log("hola curioso, ¿estas perdido, o eres programador?")
},5000)
/* recolecion de datos*/
function bancos() {
    let dinero = parseInt(document.getElementById("dinero_a_prestar").value);
    let cuotas = parseInt(document.getElementById("cantidad_de_cuotas").value);
    let bancosSeleccion = document.getElementById("bancosSeleccion").value;
    /* tipo de operaciones */
    switch (bancosSeleccion) {
        case "UVA":
            let cuotasMenualesUva = dinero / cuotas;
            let interesesUva = cuotasMenualesUva * UVA;
            let finalPorMesUva = cuotasMenualesUva + interesesUva
            swal("Felicidades, tu credito fue aprobado:", ` ${finalPorMesUva} sea tu cuota UVA por mes, requerde que la Uva esta sujeta a inflacion`, "success");
            break;
        case "Especial":
            let cuotasMenualesEspecial = dinero / cuotas;
            let interesesEspecial = cuotasMenualesEspecial * Especial;
            let finalPorMesEspecial = cuotasMenualesEspecial + interesesEspecial
            swal("Felicidades, tu credito fue aprobado:", ` ${finalPorMesEspecial} sea tu cuota fija por mes`, "success");
            break;
        case "IUDU":
            let cuotasMenualesIUDU = dinero / cuotas;
            let interesesIUDU = cuotasMenualesIUDU * IUDU;
            let finalPorMesIUDU = cuotasMenualesIUDU + interesesIUDU
            swal("Felicidades, tu credito fue aprobado:", ` ${finalPorMesIUDU} sea tu cuota fija por mes`, "success");
            break;
        case "Santander":
            let cuotasMenualesSantander = dinero / cuotas;
            let interesesSantander = cuotasMenualesSantander * Santander;
            let finalPorMesSantander = cuotasMenualesSantander + interesesSantander
            swal("Felicidades, tu credito fue aprobado:", ` ${finalPorMesSantander} sea tu cuota fija por mes`, "success");
            break;
        case "Seleccione":
            swal("incompleto", "seleccione una opcion valida", "error");

    }

/* almacenamiento en storage */
    localStorage.setItem("dinero_solicitado", dinero);
    localStorage.setItem("cantidad_de_coutas", cuotas);
    localStorage.setItem("banco_seleccionado", bancosSeleccion);
    console.log(localStorage.getItem("dinero_solicitado"));
    console.log(localStorage.getItem("cantidad_de_coutas"));
    console.log(localStorage.getItem("banco_seleccionado"));
}

/* recolecion de datos del interesado */
function datos() {
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let apellidoCompleto = document.getElementById("apellidoCompleto").value;
    let numeroTelefonico = parseInt(document.getElementById("numeroTelefonico").value);
    let correoElectronico = document.getElementById("correoElectronico").value;
    swal({
        title: "Esta seguro que pide pagar esto, y no es una banalidad??",
        text: "si la respuesta es si, estoy seguro, de click en continuar. caso contrario de click en cancelar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("En buena hora tio, nos a vendido tu alm... por varios meses", {
            icon: "success",
          });
        } else {
          swal("Poof! gallina, cancelaste la operacion");
        }
      });
      /* almacenamiento de datos interesado */
    localStorage.setItem("nombre Completo", nombreCompleto);
    localStorage.setItem("apellido Completos", apellidoCompleto);
    localStorage.setItem("numero Telefonico", numeroTelefonico);
    localStorage.setItem("correo Electronico", correoElectronico);
    console.log(localStorage.getItem("nombre Completo"));
    console.log(localStorage.getItem("apellido Completos"));
    console.log(localStorage.getItem("numero Telefonico"));
    console.log(localStorage.getItem("correo Electronico"));
JSON.stringify(datos);


}
