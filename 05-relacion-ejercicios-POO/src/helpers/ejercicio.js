export function Tarea(nombre){
    //propiedades estaticas
    Tarea.contador=0;
    //propiedades privadas
    //propiedades publicas
    this.id=++Tarea.contador;
    this.nombre=nombre;
    this.completada=false;

    //métodos publicos
    this.toggleCompletada=()=>{
        this.completada=!this.completada;
    }

    //métodos privados
    function logEstado(){
        console.log(`
            La tarea ${this.nombre} esta ${this.completada ?"completada": "pendiente"}`)
    }
    //crear un metodo estático del objeto
    // que lo tengan todos las instancias
    Tarea.prototype.info=function(){
        console.log(`
            la tarea ${this.nombre} esta ${this.completada?"completada": "pendiente"}
        `);
    }


}

export class TareaClass{
    //propiedad privada
    #completada;

    //constructor
    constructor(nombre){
        this.id=TareaClass.contador++;
        this.nombre=nombre;
        this.#completada=false;
    }
    //metodo publico
    toggleCompletada(){
        this.#completada=!this.#completada;
    }
    info(){
        console.log(`
            la tarea ${this.nombre} esta ${this.#completada?"completada": "pendiente"}
        `);
    }
}