// Usuarios
class Usuario {
  static contador = 0;
  id: number;
  dni: string;
  nombre: string;
  apellidos: string;
  usuario: string;
  contraseña: string;
  tipo_usuario: number;
  activo: boolean;

  constructor(dni: string, nombre: string, apellidos: string, usuario: string, contraseña: string, tipo_usuario: number, activo: boolean) {
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
  static generarId() {
    if (!this.contador) {
      this.contador = 0;
    }
    this.contador++;
    return this.contador;
  }
}

// Cursos
class Curso {
  static contador = 0;
  id: number;
  nombre: string;
  id_a1: number;

  constructor(nombre: string, id_a1: number) {
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
}

// Notas
class Nota {
  static contador = 0;
  id: number;
  id_alumno: number;
  id_curso: number;
  nota: number;

  constructor(id_alumno: number, id_curso: number, nota: number) {
    this.id = Nota.generarId();
    this.id_alumno = id_alumno;
    this.id_curso = id_curso;
    this.nota = nota;
  }

  // ID incremental para notas
  static generarId() {
    if (!this.contador) {
      this.contador = 0;
    }
    this.contador++;
    return this.contador;
  }
}

// Asignatura
class Asignatura {
  static contador = 0;
  id: number;
  nombre: string;
  id_profesor1: number;

  constructor(nombre: string, id_profesor1: number) {
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
}

const usuarios: Usuario[] = [
  new Usuario("12345678A", "Juan", "Pérez", "juanperez", "contraseña1", 1, true),
  new Usuario("23456789B", "Ana", "García", "anagarcia", "contraseña2", 2, true),
  new Usuario("34567890C", "Pedro", "Martínez", "pedromartinez", "contraseña3", 3, false),
];

const cursos: Curso[] = [
  new Curso("Programación2000", 1),
  new Curso("Programación2001", 1),
  new Curso("Programación2002", 1),
];

const notas: Nota[] = [
  new Nota(1, 1, 8),
  new Nota(1, 2, 7),
  new Nota(2, 2, 9),
];

const asignaturas: Asignatura[] = [
  new Asignatura("Lengua", 1),
  new Asignatura("Física", 2),
  new Asignatura("Inglés", 3),
];

const data = {
  usuarios,
  cursos,
  notas,
  asignaturas,
};

// Convertir array en JSON
const jsondata = JSON.stringify(data);
console.log(jsondata);

// Convertir JSON en array
const arraydata = JSON.parse(jsondata);
console.log(arraydata);

// Recorremos usuarios y mostramos por consola las propiedades
for (let i = 0; i < usuarios.length; i++) {
  console.log(`Usuario ${i + 1}:`);
  console.log(`DNI: ${usuarios[i].dni}`);
  console.log(`Nombre: ${usuarios[i].nombre}`);
  console.log(`Apellidos: ${usuarios[i].apellidos}`);
  console.log(`Usuario: ${usuarios[i].usuario}`);
  console.log(`Contraseña: ${usuarios[i].contraseña}`);
  console.log(`Tipo de usuario: ${usuarios[i].tipo_usuario}`);
  console.log(`Activo: ${usuarios[i].activo}`);
}

// Recorremos cursos y mostramos por consola las propiedades
for (let i = 0; i < cursos.length; i++) {
  console.log(`Curso: ${cursos[i].nombre}`);
  console.log(`ID: ${cursos[i].id_a1}`);
}

// Recorremos notas y mostramos por consola las propiedades
for (let i = 0; i < notas.length; i++) {
  console.log(`ID alumno: ${notas[i].id_alumno}`);
  console.log(`ID asignatura: ${notas[i].id_curso}`);
  console.log(`Nota: ${notas[i].nota}`);
}
// Recorremos asignaturas y mostramos por consola las propiedades
for (var i=0; i < asignaturas.length; i++){
  console.log(`Nombre:  + ${asignaturas[i].nombre}`);
  console.log(`ID profesor: " + ${asignaturas[i].id_profesor1}`);
}
