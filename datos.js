// Usuarios
function Usuario(dni, nombre, apellidos, usuario, contraseña, tipo_usuario, activo) {
  this.id = Usuario.generarId();
  this.dni = dni;
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.usuario = usuario;
  this.contraseña = contraseña;
  this.tipo_usuario = tipo_usuario;  
  this.activo = activo;
}

// ID incremental
Usuario.generarId = function() {
  if (!this.contador) {
    this.contador = 0;
  }
  this.contador++;
  return this.contador;
}

// Cursos
function Curso(nombre, id_a1) {
  this.id = Curso.generarId();
  this.nombre = nombre;
  this.id_a1 = id_a1;
}

Curso.generarId = function() {
  if (!this.contador) {
    this.contador = 0;
  }
  this.contador++;
  return this.contador;
}

// Notas
function Nota(id_alumno, id_curso, nota) {
  this.id = Nota.generarId();
  this.id_alumno = id_alumno;
  this.id_curso = id_curso;
  this.nota = nota;
}

// ID incremental para notas
Nota.generarId = function() {
  if (!this.contador) {
    this.contador = 0;
  }
  this.contador++;
  return this.contador;   
}

// Asignatura
function Asignatura(nombre, id_profesor1)  {
  this.id = Asignatura.generarId();
  this.nombre = nombre;
  this.id_profesor1 = id_profesor1;
}

Asignatura.generarId = function() {
  if (!this.contador) {
    this.contador = 0;
  }
  this.contador++;
  return this.contador;
}

// Declarar 3 objetos de cada modelo de datos

var usuarios = [
  new Usuario("12345678A", "Juan", "Pérez", "juanperez", "contraseña1", 1, true),
  new Usuario("23456789B", "Ana", "García", "anagarcia", "contraseña2", 2, true),
  new Usuario("34567890C", "Pedro", "Martínez", "pedromartinez", "contraseña3", 3, false)
];

var cursos = [
  new Curso("Programación2000", 1),
  new Curso("Programación2001", 1),
  new Curso("Programación2002", 1)
];

var notas = [
  new Nota(1, 1, 8),
  new Nota(1, 2, 7),
  new Nota(2, 2, 9)
];

var asignaturas = [
  new Asignatura("Lengua", 1),
  new Asignatura("Física", 2),
  new Asignatura("Inglés", 3)
];

var data = {
  usuarios: usuarios,
  cursos: cursos,
  notas: notas,
  asignaturas: asignaturas
};

//convertir array en JSON 
var jsondata = JSON.stringify(data);

console.log(jsondata);

//convertir JSON en array
var arraydata = JSON.parse(jsondata);

console.log(arraydata);


// Recorremos usuarios y mostramos por consola las propiedades
for (var i = 0; i < usuarios.length; i++) {
    console.log("Usuario " + (i+1) + ":");
    console.log("DNI: " + usuarios[i].dni);
    console.log("Nombre: " + usuarios[i].nombre);
    console.log("Apellidos: " + usuarios[i].apellidos);
    console.log("Usuario: " + usuarios[i].usuario);
    console.log("Contraseña: " + usuarios[i].contraseña);
    console.log("Tipo de usuario: " + usuarios[i].tipo_usuario);
    console.log("Activo: " + usuarios[i].activo);
}

// Recorremos cursos y mostramos por consola las propiedades
for(var i=0; i < cursos.length; i++) {
    console.log("Curso: " + cursos[i].nombre);
    console.log("ID: " + cursos[i].id_a1);
}

// Recorremos notas y mostramos por consola las propiedades
for (var i=0; i < notas.length; i++){
    console.log("ID alumno: " + notas[i].id_alumno);
    console.log("ID asignatura: " + notas[i].id_asignatura);
    console.log("ID curso: " + notas[i].id_curso);
}

// Recorremos asignaturas y mostramos por consola las propiedades
for (var i=0; i < asignaturas.length; i++){
    console.log("Nombre: " + asignaturas[i].nombre);
    console.log("ID profesor: " + asignaturas[i].id_profesor1);
}
