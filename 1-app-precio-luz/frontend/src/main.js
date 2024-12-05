import { createLoadButton } from "./components/loadButtom/loadButtom";
import { createSpinner } from "./components/spinner/spinner";
// ----DECLARACION DE VARIABLES ---

// ----DECLARACION DE FUNCIONES ---
const handleClick=() => {
  // DIV CARGANDO...
  const spinner=createSpinner(); // Crear el spinner
  app.appendChild(spinner); // Añadir el spinner al DOM
}

document.addEventListener('DOMContentLoaded',() => {

  //MOSTRAR BOTON MOSTRAR PRECIOS LUZ

  const app=document.getElementById("app");
  const loadPricesBtn=createLoadButton();
  
  // const loadPricesBtn=document.getElementById("load-prices-btn");
  app.appendChild(loadPricesBtn);
  
  loadPricesBtn.addEventListener("click", handleClick)
})

