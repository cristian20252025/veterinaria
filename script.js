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
"2. registrar mascota\n"+
"3. listar mascotas\n"+
"4. buscar mascota por nombre\n"+
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
