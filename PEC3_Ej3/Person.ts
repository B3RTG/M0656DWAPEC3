/**
 * Dado que persona tiene algunos parametros que no estan definidos
 * entiendo que hereda desde una clase superior que si los tendra
 * como el nombre, apellidos, etc...
 */
export default class Person {

    name: String; 
    surname: String; 
    nick: String; 
    birthdate: Date;

    constructor(name: String, surname: String, nick: String, birthdate: Date) {
                
    }
}