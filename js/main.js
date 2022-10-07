// class Persona {
//     constructor(dni, nombre = "Pepe", edad = 30, sexo = "m", peso = 70, altura = "1,8m") {
//         this.nombre = nombre
//         this.edad = edad
//         this.dni = dni
//         this.sexo = sexo
//         this.peso = peso
//         this.altura = altura
//     }
// }

// let persona1 = new Persona("73816732Y")
// let persona2 = new Persona("73434232Z")
// let persona3 = new Persona("37816732O")



class Password{
    contructor(longitud=8,contraseña=0){
        this.longitud = longitud
        this.contraseña = contraseña
    }

    generarPass(length,pass){
        pass = (Math.floor(Math.random()) * length)
        console.log(pass)
    }

}


let nueva = new Password();

nueva.generarPass(nueva.longitud,nueva.contraseña)