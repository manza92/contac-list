// Crear una lista de contactos con datos predefinidos
let contactos = [
  { nombre: "Juan Perez" },
  { nombre: "Maria Garcia" },
  { nombre: "Pedro Rodriguez" }
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombre) {
  contactos.push({ nombre });
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombre) {
  contactos = contactos.filter(contacto => contacto.nombre !== nombre);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  contactos.forEach(contacto => console.log(contacto.nombre));
}

// Agregar un nuevo contacto a la lista
agregarContacto("Ana Lopez");

// Borrar un contacto existente de la lista
borrarContacto("Maria Garcia");

// Imprimir en consola los contactos presentes en la lista
imprimirContactos();
