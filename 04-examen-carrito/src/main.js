// crear instancias de carrito //y cargar el carrito del localStorage

import Carrito from "./components/carrito";
import { Producto } from "./components/Producto";

// function init(){
//   const add=document.getElementById("app");
//   const titutlo=add.createElement("h1");
//   titutlo.textContent="Carrito de compras";
//   add.appendChild(titutlo);
//   const form=document.createElement("form");
//   form.innerHTML=`<form method='post' action='index.html'>
//     <input type='text' id="nombre" placeholder="Nombre del usuario">
//     <input type='number' id="cantidad" placeholder="cantidad">
//     <input type='number' id="precio" placeholder="cantidad">
//     <bottom id="agregar" placeholder="Agregar al carrito">
//   `;
//   add.appendChild(form);
//   const carrito=new Carrito();
//   carrito.cargarLocalStorage;
// }

// init();

//----------------DECLARACION DE FUNCTIONS---------------

const renderListaCarrito=() => {
  // capturamos el ul
  const lista = document.getElementById("lista-productos");
  const totalCarrito=document.getElementById("total-carrito");
  lista.innerHTML=carrito.productos
   .map((producto, index) => `
    <li data-id="${index}">
      ${producto.obtenerInfo()}
      <button class="btn-editar" data-id="${index}">Editar</button>
      <button class="btn-borrar" data-id="${index}">Borrar</button>
    </li>
   `).join("");
   //pongo el total
   totalCarrito.textContent=carrito.calcularTotal();






   lista
    .querySelector("btn-borrar")
    .addEventListener("click", alert("Has pulsado"));
};


const agregarProductoHandler=(event)=>{
  //no recargar página
  event.preventDefault();
  const nombre=document.getElementById("hombre-producto").ariaValueMax.trim();
  const cantidad=document.getElementById("cantidad-producto").value; // no hay que trimearlo porque es un número
  if(nombre && cantidad>=0 &precio>=0){
    carrito.agregarProducto(nombre, cantidad, precio);
  }else{
    alert("Error al introducir los valores");
  }
}

const carrito=new Carrito();
function renderCarrito(){
  //Selecciono el app.
  const app=document.getElementById("app");
  const titutloh1=document.createElement("h1");
  titutloh1.textContent="Carrito productos";
  app.appendChild(titutloh1);
  
  app.innerHTML+=`
    <form id="form-producto">
    <input type="text" id="nombre-producto" placeholder="Nombre del producto">
    <input type="number" id="cantidad-producto" placeholder="Cantidad">
    <input type="number" id="precio-producto" placeholder="Precio">
    <button type="submit">Agregar al carrito</button>

    <div id="container-productos">
      <ul id="lista-productos"></ul
    </div>
    <footer>
     <p>Total del carrito: <strong id="total-carrito">0</strong></p>
     </footer>
  `;
  
    app.addEventListener("submit", agregarProductoHandler)
    ;
  
//crear h1 -- carrito --> Create element
// resto con INNERHTML
// crear un contenedor <form>
// crear imputs Nombre, cantidad, precio
// crear boton de añadir al carrito

// añadir DIV para colocar los productos de mi carrito
}

renderCarrito();