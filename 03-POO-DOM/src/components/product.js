export class product{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    getInfo(){
        return `Nombre: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock}`;
    }
    updateStock(cantidad){
        if(this.stock + cantidad < 0 || this.stock - cantidad < 0){
            console.log('No hay stock suficiente');
            return;
        }else if(cantidad < 0){
            this.stock = stock - cantidad
        }else{
            this.stock = stock+cantidad;
        }
        
    }
    array(){
        return [this.nombre, this.precio, this.stock];
    }
    

}
const dom=document.createElement('div');

const productos = [
    new product('Producto 1', 100, 50),
    new product('Producto 2', 200, 100),
    new product('Producto 3', 300, 200),
]

const generarProductos= () => {
    productos.forEach(p => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = p.getInfo();
        dom.appendChild(productoDiv);
    });
}
