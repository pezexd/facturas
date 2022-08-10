const nitValue = document.getElementById('nit');
const nombre = document.getElementById('nombre');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const avisoNit = document.getElementById('avisoNit');
document.getElementById('loadNit').addEventListener('click', loadNit);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear() - 18;

if (mm < 10) mm = '0' + mm.toString();
if (dd < 10) dd = '0' + dd.toString();
today = yyyy + '-' + mm + '-' + dd;

document.getElementById('fechaNacimiento').setAttribute('max', today);

function loadNit() {
  fetch('./nit.json')
    .then((response) => response.json())
    .then((data) => {
      const found = data.find((element) => element.nit == nitValue.value);
      if (found) {
        nombre.value = found.nombre;
        fechaNacimiento.value = found.fecha;
        avisoNit.innerText = '';
      } else {
        avisoNit.innerText = '¡El NIT no se encontró en la base de datos!.';
        nombre.value = '';
        fechaNacimiento.value = '';
      }
    });
}
