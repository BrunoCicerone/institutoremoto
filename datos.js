// Usuarios
    function usuario (dni, nombre, apellidos, usuario, contraseña, tipo_usuario, activo) {
      this.id = usuario.generarId();
      this.dni = dni;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.usuario = usuario;
      this.contraseña = contraseña;
      this.tipo_usuario = tipo_usuario;  
      this.activo = activo;
    
    }
  
    //ID incremental
    static generarId() {
      if (!this.contador) {
        this.contador = 0;
      }
      this.contador++;
      return this.contador;
    }
  
  
  // Cursos

    function curso (nombre, descripcion) {
      this.id = Curso.generarId();
      this.nombre = nombre;
      this.id_a1 = id_a1;
    }
  
    static generarId() {
      if (!this.contador) {
        this.contador = 0;
      }
      this.contador++;
      return this.contador;
    }
  
  
  // Notas
  
    function nota (id_alumno, id_curso, nota) {
      this.id = Nota.generarId();
      this.id_alumno = id_alumno;
      this.id_curso = id_curso;
      this.nota = nota;
    }

    //ID incremental para notas
    static generarId() {
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
  
    static generarId() {
      if (!this.contador) {
        this.contador = 0;
      }
      this.contador++;
      return this.contador;
    }
  
  
  // Declarar 3 objetos de cada modelo de datos

var usuarios = [
var usuario1 = new Usuario("12345678A", "Juan", "Pérez", "juanperez", "contraseña1", 1, true);
var usuario2 = new Usuario("23456789B", "Ana", "García", "anagarcia", "contraseña2", 2, true);
var usuario3 = new Usuario("34567890C", "Pedro", "Martínez", "pedromartinez", "contraseña3", 3, false);
];

var cursos = [
var curso1 = new Curso("Programación2000", 1);
var curso2 = new Curso("Programación2001", 1);
var curso3 = new Curso("Programación2002", 1);
];
  
var notas = [
var nota1 = new Nota(1, 1, 8, 10);
var nota2 = new Nota(1, 2, 7, 3);
var nota3 = new Nota(2, 2, 9, 8);
];

var asignaturas = [
var asignatura3 = new Asignatura("Lengua", 1);
var asignatura4 = new Asignatura("Física", 2);
var asignatura5 = new Asignatura("Inglés", 3);
];

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
    console.log("ID alumno: " + notas[1].id_alumno);
    console.log("ID asignatura: " + notas[1].id_asignatura);
    console.log("ID curso: " + notas[1].id_curso);
}

// Recorremos asignaturas y mostramos por consola las propiedades
for (var i=0; i < asignaturas.length; i++){
    console.log("Nombre: " + asignaturas[1].nombre);
    console.log("ID profesor: " + asignaturas[1].id_profesor1);
   
}