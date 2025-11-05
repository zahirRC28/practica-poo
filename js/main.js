class Libro {
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = 'Disponible';
    }
    getEstado(){
        return this._prestado;
    }

    setEstado(estado){
        this._prestado = estado;
    }

    prestar(){
       return this.setEstado('Prestado');
    }

    devolver(){
        return this.setEstado('Disponible');
    }

};

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
console.log(libro.getEstado()); // "Disponible"
console.log(libro);
libro.prestar();
console.log(libro.getEstado()); // "Prestado"
console.log(libro);

class Biblioteca {
    constructor(nombre){
        this.nombre = nombre;
        this.libros = [];
    }
    //añade un libro a la colección
    agregarLibro(libro){
        this.libros.push(libro);
    }
    // busca un libro específico en la colección
    buscarPorISBN(isbn){
        const encontrado = this.libros.find((libro)=>{
            return libro.isbn == isbn;
        })
        return encontrado;
    }
    //presta un libro según su ISBN
    prestarLibro(isbn){
        const encontrado = this.libros.find((libro)=>{
            return libro.isbn == isbn;
        })
        encontrado.prestar();
        return encontrado;
    }
    //devuelve un libro según su ISBN
    devolverLibro(isbn){
        const encontrado = this.libros.find((libro)=>{
            return libro.isbn == isbn;
        })
        encontrado.devolver();
        return encontrado;
    }
    //muestra todos los libros con su estado
    mostrarLibros(){
        for(let i = 0; i < this.libros.length; ++i){
            console.log(`El libro ${this.libros[i].titulo} esta ${this.libros[i]._prestado}`);
        }
    }

};

const biblioPeru = new Biblioteca('Ciro Alegría');

const libro1 = new Libro('señor de los anillos','pepe','123');
const libro2 = new Libro('mago de oz','pepa','456');
const libro3 = new Libro('alas de sangre','pipo','789')
biblioPeru.agregarLibro(libro1);
biblioPeru.agregarLibro(libro2);
biblioPeru.agregarLibro(libro3);
console.log(biblioPeru.buscarPorISBN('456'));
console.log(biblioPeru.prestarLibro('789'));
console.log(biblioPeru.devolverLibro('789'));
console.log(biblioPeru.prestarLibro('123'));
biblioPeru.mostrarLibros();
