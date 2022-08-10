const nitValue = document.getElementById('nit');
const nombre = document.getElementById('nombre');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const avisoNit = document.getElementById('avisoNit');
document.getElementById('loadNit').addEventListener('click', loadNit);

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
