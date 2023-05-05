// Usuarios
var Usuario = /** @class */ (function () {
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
    Usuario.generarId = function () {
        if (!this.contador) {
            this.contador = 0;
        }
        this.contador++;
        return this.contador;
    };
    Usuario.contador = 0;
    return Usuario;
}());
// Cursos
var Curso = /** @class */ (function () {
    function Curso(nombre, id_a1) {
        this.id = Curso.generarId();
        this.nombre = nombre;
        this.id_a1 = id_a1;
    }
    Curso.generarId = function () {
        if (!this.contador) {
            this.contador = 0;
        }
        this.contador++;
        return this.contador;
    };
    Curso.contador = 0;
    return Curso;
}());
// Notas
var Nota = /** @class */ (function () {
    function Nota(id_alumno, id_curso, nota) {
        this.id = Nota.generarId();
        this.id_alumno = id_alumno;
        this.id_curso = id_curso;
        this.nota = nota;
    }
    // ID incremental para notas
    Nota.generarId = function () {
        if (!this.contador) {
            this.contador = 0;
        }
        this.contador++;
        return this.contador;
    };
    Nota.contador = 0;
    return Nota;
}());
// Asignatura
var Asignatura = /** @class */ (function () {
    function Asignatura(nombre, id_profesor1) {
        this.id = Asignatura.generarId();
        this.nombre = nombre;
        this.id_profesor1 = id_profesor1;
    }
    Asignatura.generarId = function () {
        if (!this.contador) {
            this.contador = 0;
        }
        this.contador++;
        return this.contador;
    };
    Asignatura.contador = 0;
    return Asignatura;
}());
var usuarios = [
    new Usuario("12345678A", "Juan", "Pérez", "juanperez", "contraseña1", 1, true),
    new Usuario("23456789B", "Ana", "García", "anagarcia", "contraseña2", 2, true),
    new Usuario("34567890C", "Pedro", "Martínez", "pedromartinez", "contraseña3", 3, false),
];
var cursos = [
    new Curso("Programación2000", 1),
    new Curso("Programación2001", 1),
    new Curso("Programación2002", 1),
];
var notas = [
    new Nota(1, 1, 8),
    new Nota(1, 2, 7),
    new Nota(2, 2, 9),
];
var asignaturas = [
    new Asignatura("Lengua", 1),
    new Asignatura("Física", 2),
    new Asignatura("Inglés", 3),
];
var data = {
    usuarios: usuarios,
    cursos: cursos,
    notas: notas,
    asignaturas: asignaturas,
};
// Convertir array en JSON
var jsondata = JSON.stringify(data);
console.log(jsondata);
// Convertir JSON en array
var arraydata = JSON.parse(jsondata);
console.log(arraydata);
// Recorremos usuarios y mostramos por consola las propiedades
for (var i_1 = 0; i_1 < usuarios.length; i_1++) {
    console.log("Usuario ".concat(i_1 + 1, ":"));
    console.log("DNI: ".concat(usuarios[i_1].dni));
    console.log("Nombre: ".concat(usuarios[i_1].nombre));
    console.log("Apellidos: ".concat(usuarios[i_1].apellidos));
    console.log("Usuario: ".concat(usuarios[i_1].usuario));
    console.log("Contrase\u00F1a: ".concat(usuarios[i_1].contraseña));
    console.log("Tipo de usuario: ".concat(usuarios[i_1].tipo_usuario));
    console.log("Activo: ".concat(usuarios[i_1].activo));
}
// Recorremos cursos y mostramos por consola las propiedades
for (var i_2 = 0; i_2 < cursos.length; i_2++) {
    console.log("Curso: ".concat(cursos[i_2].nombre));
    console.log("ID: ".concat(cursos[i_2].id_a1));
}
// Recorremos notas y mostramos por consola las propiedades
for (var i_3 = 0; i_3 < notas.length; i_3++) {
    console.log("ID alumno: ".concat(notas[i_3].id_alumno));
    console.log("ID asignatura: ".concat(notas[i_3].id_curso));
    console.log("Nota: ".concat(notas[i_3].nota));
}
// Recorremos asignaturas y mostramos por consola las propiedades
for (var i = 0; i < asignaturas.length; i++) {
    console.log("Nombre:  + ".concat(asignaturas[i].nombre));
    console.log("ID profesor: \" + ".concat(asignaturas[i].id_profesor1));
}
