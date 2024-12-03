// DECLARACION DE FUNCIONES

import Carrito from "./components/Carrito";

const carrito=new Carrito();

const renderListaCarrito = () => {
  
  const listaProductos=document.getElementById('lista-productos');
  const totalCarrito=document.getElementById('total-carrito');
  // listaProductos.innerHTML= carrito.productos.map((producto, index)=>`
  
  // `).join("")
  listaProductos.innerHTML= carrito.productos.map((producto, index)=>`
  
    <li data-id="${index}">
       ${producto.obtenerInfo()}
       <button type="submit" class="btn-editar"data-id="${index}>editar</button>
       <button type="submit" class="btn-borrar"data-id="${index}>borrar</button>
     </li>
  `).join("");
  totalCarrito.textContent=carrito.calcularTotal();
}
const agregarProductoHandler=(event)=>{
  event.preventDefault();
  const nombre=document.getElementById('nombre-producto').value.trim();
  const cantidad=Number(document.getElementById('cantidad-producto').value);
  const precio=Number(document.getElementById('precio-producto').value);
  if(nombre && cantidad>0 && precio>0){
    carrito.agregarProducto(nombre, cantidad, precio);
    renderListaCarrito();
  }else{
    alert("Error al introducir los valores");
  }
  event.target.reset();

}
function renderCarrito(){
  const app=document.getElementById("app");
  app.innerHTML+=`
    <h2>Carrito de Compras</h2>
    <form id="form-producto">

    <input type="text" id="nombre-producto" placeholder="Nombre del producto">
    <input type="number" id="cantidad-producto" placeholder="Cantidad">
    <input type="number" id="precio-producto" placeholder="Precio">
    <button type="submit" id="agregar">Agregar al carrito</button>
    </form>

    <div id="container-productos">
      <ul id="lista-productos"></ul
    </div>
    <footer>
     <p>Total del carrito: <strong id="total-carrito">0</strong></p>
     </footer>
  `;
  document.getElementById("form-producto").addEventListener("submit", agregarProductoHandler)


}

renderCarrito();