class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(name){
        this.mascotas.push(name);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(name, author){
        this.libros.push({nombre: name, autor: author});
    }
    getBookNames(){
        return this.libros.map((libros)=> libros.nombre); 
    }
}


const user = new Usuario('Juan Manuel', 'Van Oyen');

user.addMascota('Thai');
user.addMascota('Dalí');
user.addBook('Steve Jobs', 'Walter Isaacson');
user.addBook('Elon Musk', 'Ashlee Vance');

console.log(user.getFullName());
console.log(user.countMascotas());
console.log(user.getBookNames());

