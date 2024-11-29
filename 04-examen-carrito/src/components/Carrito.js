import { Producto } from "./Producto";

export default class Carrito{
    constructor(){
        this.productos=[];
    }
    //Agregar un "Producto" al carrito

    agregarProducto(nombre, cantidad, precio){
        this.productos.push(new Producto(nombre, cantidad, precio));
    }
    //Guardar en el localstorage-

    borrarProducto(index){
        this.productos.splice(index, 1);
        //guardar en el localStorage
    }

    editarProducto(index, newCantidad){
        if(newCantidad>0){
            this.productos[index.cantidad]=newCantidad;
            //guardar en el localStorage
        }
    }

    calcularTotal(){
        this.productos.reduce((total, producto)=>total+producto.calcularTotal,0)
    }

    // extra ------------ local Storage -----------------------
    guardarLocalStorage(){
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    cargarLocalStorage(){
        
        const carrito=JSON.parse(localStorage("carrito"));
        if (carrito){
            this.productos=carrito.map((producto)=> new Producto(producto.nombre, producto.cantidad, producto.precio));
        }
        // crear un map de productos y meterlos en el carrito

    }

    // ordenar por nombre
    

    // ordenar por precio
}