/**
 * Clase que representa un libro dentro de la biblioteca.
 */

class Libro {
    /**
     * Crea una nueva instancia de un libro.
     * @param {string} titulo - Título del libro.
     * @param {string} autor - Autor del libro.
     * @param {string} isbn - Código ISBN que identifica al libro.
     */
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = 'Disponible';
    }
     /**
     * Obtiene el estado actual del libro (Disponible o Prestado).
     * @type {string}
     */
    get estado(){
        return this._prestado;
    }
    /*
    getEstado(){
        return this._prestado;
    }
    */

    /**
     * Establece un nuevo estado para el libro.
     * @param {string} estado - El nuevo estado del libro ("Disponible" o "Prestado").
     */
    set estado(estado){
        this._prestado = estado;
    }
    /*
    setEstado(estado){
        this._prestado = estado;
    }*/

    /**
     * Marca el libro como prestado.
     * @returns {string}
     */
    prestar(){
        //El set
       return this.estado ='Prestado';
       /*
       return this.setEstado('Prestado');
       */
    }

    /**
     * Marca el libro como disponible nuevamente.
     * @returns {string}
     */
    devolver(){
        //El set
        return this.Estado = 'Disponible';
    }

};

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
//El get 
console.log(libro.estado); // "Disponible"
//otra opcion con get
//console.log(libro.getEstado); // "Disponible"
console.log(libro);
libro.prestar();
console.log(libro.estado); // "Prestado"
console.log(libro);

/**
 * Clase que representa una biblioteca que contiene varios libros.
 */
class Biblioteca {
    /**
     * Crea una nueva instancia de Biblioteca.
     * @param {string} nombre - Nombre de la biblioteca.
     */
    constructor(nombre){
        this.nombre = nombre;
        /** @type {Libro[]} */
        this.libros = [];
    }
    /**
     * Agrega un libro a la colección de la biblioteca.
     * @param {Libro} libro - Instancia de la clase Libro a agregar.
     * @returns {void}
     */
    //añade un libro a la colección
    agregarLibro(libro){
        this.libros.push(libro);
    }
    /**
     * Busca un libro dentro de la biblioteca usando su ISBN.
     * @param {string} isbn - ISBN del libro que se desea buscar.
     * @returns {Libro | undefined} El libro encontrado o undefined si no existe.
     */
    // busca un libro específico en la colección
    buscarPorISBN(isbn){
        const encontrado = this.libros.find((libro)=>{
            return libro.isbn == isbn;
        })
        return encontrado;
    }
    /**
     * Presta un libro específico según su ISBN.
     * @param {string} isbn - ISBN del libro que se desea prestar.
     * @returns {Libro | undefined} El libro prestado o undefined si no se encuentra.
     */
    //presta un libro según su ISBN
    prestarLibro(isbn){
        const encontrado = this.libros.find((libro)=>{
            return libro.isbn == isbn;
        })
        encontrado.prestar();
        return encontrado;
    }
    /**
     * Devuelve un libro específico según su ISBN.
     * @param {string} isbn - ISBN del libro que se desea devolver.
     * @returns {Libro | undefined} El libro devuelto o undefined si no se encuentra.
     */
    //devuelve un libro según su ISBN
    devolverLibro(isbn){
        const encontrado = this.libros.find((libro)=>{
            return libro.isbn == isbn;
        })
        encontrado.devolver();
        return encontrado;
    }
    /**
     * Muestra en consola todos los libros con su estado actual.
     * @returns {void}
     */
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
