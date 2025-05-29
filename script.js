const duenos =[]
const mascotas =[]

let idDuenos = 1;
let idMascotas = 1;

function menu(){
    let opcion;
    do
    {
        opcion = prompt(
           // Menu Veterinaria
"1. Registrar dueño\n"+
"2. Registrar mascota\n"+
"3. Listar mascotas\n"+
"4. Buscar mascota por nombre\n"+
"5. Actualizar estado de salud\n"+
"6. Eliminar nascota\n"+
"7. ver mascotas de un dueño\n"+
"8. salir",
        );

        switch (opcion){
            case '1':RegistrarDuenoAsiync(); break;
            case '2':RegistrarMascotasAsiync(); break;
            case '3':ListarMascotas(); break;
            case '4':BuscarMascotapornombre(); break;
            case '5':ActualizarEstadosaludAsiync(); break;
            case '6':EliminarMascotaAsiync(); break;
            case '7':VerMascotasporDuenoAsiync(); break;
            case '8':alert('¡Hasta luego!'); break;
            default: alert('Opcion invalida');

        }
    } while (opcion !== '8');
}

menu();


const ListarMascotas = () => {
    if (mascotas.length === 0) return console.log("No hay mascotas regristadas.");
    mascotas.forEach(m => {
        console.log('${m.nombre} (${m.especie}) - Dueño: ${obtenernombredueño(m.idDueno)}');
    });
}

const BuscarMascotapornombre = () => {
    const nombre = prompt("Nombre de la mascota");
    new Promise((resolve) => {
        setTimeout(() => {
            const mascota = mascotas.find(m => m.nombre.tolowerCase() === nombre.tolowerCase());
            mascota ? resolve(mascota) : resolve(null);
        }, 1500);
    }).then(m => {
        if (m){
            console.log('Encontrada: ${m.nombre}, Estado: ${m.estadoSalud}');
        } else {
            alert("Mascota no encontrada.");

        }
      });
    };
    
const obtenerNombreDueno = (id) => {ç
    const d = duenos.find(d => d.id === id);
    return d ? d.nombre : 'Desconocido';
};