class Contacto {
  constructor(id, nombres, apellidos, telefono, ciudad, direccion) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ubicaciones = {
      ciudad: ciudad,
      direccion: direccion
    };
  }
}
let contacto1 = new Contacto(1, "Juan", "Pérez", "555-1234", "Tegucigalpa", "Colonia Palmira");
let contacto2 = new Contacto(2, "María", "García", "555-5678", "San Pedro Sula", "Barrio El Benque");
