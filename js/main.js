class Persona {
    constructor(dni, nombre = "Pepe", edad = 30, sexo = "m", peso = 70, altura = "1,8m") {
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }
}

let persona1 = new Persona()