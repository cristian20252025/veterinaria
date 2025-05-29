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

//registrar Dueño

const resgistrarDuenoAsync = () => {
    const nombre = prompt("Nombre:");
    const cedula = prompt("Cedula:");
    const telefono = prompt("Telefono:");
    const correo = prompt("Correo:");

    if (!nombre || !cedula || !telefono || !correo) return alert("Campos vacios");

    setTimeout (() => {
        duenos.push({ id: idDuenos++, nombre, cedula, telefono, correo});
        alert("Dueño registrado exitosamente.");
      }, 1500);
    };


 //registrar Mascota   

 const resgitrarMascotaAsync = () => {
    const nombre = prompt ("Nombre:");
    const especie = prompt ("especie(Perro, Gato, Ave, Reptil, Otro):");
    const edad = parseFloat(prompt ("edad:"));
    const peso = parseFloat(prompt ("peso:"));
    const estadoSalud = prompt ("Estado de salud (Sano, Enfermo, En tratamiento):");
    const cedulaDueno = prompt ("Cedula del dueño:");
 
    if (!nombre || !especie || isNaN(edad) || isNaN(peso) || !estadoSalud || !cedulaDueno)
      return alert("campos invalidos.");

    setTimeout(() => {
        const dueno = duenos.find(d => d.cedula === cedulaDueno);
        if (!dueno) return alert("Dueño no encontrado.");
        mascotas.push({ id: idMascotas++, nombre, especie, edad, peso, estadoSalud, idDueno: dueno.id});
        alert("mascota registrada.");
      }, 2000);
    };


// Actualizar Estado de salud

const ActualizarEstadosaludAsiync = async
  const nombre = prompt("Nombre de las mascotas")
  await new promise(resolve => setTimeout)
  const mascota = mascotas.find(m => m.nombre)
  if (!mascota) return alert("mascota")
  const nuevoEstado = prompt("Nuevo estado de salud")
  mascota.estadoSalud = nuevoEstado;
  alert("Estado de salud actualizado.");


// Eliminar mascota

const eliminarMascotaAsync = () => {
  const nombre = prompt("Nombre de la mascotas.");
  new promise ((resolve) => {
    setTimeout(() => {
      const index = mascotas.findIndex("mascota")
      resolve (index);
    }, 2000);
 }).then(index => {
   if (index === -1) return alert("mascota")
   mascota.splice(index, 1);
   alert("mascota elimina.");
 });
};




  



