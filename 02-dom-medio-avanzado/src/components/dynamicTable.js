/**
 * 
 * data de EJEMPLO con nombre, edad e email
 * {nombre: "juan", edad: 25, email: "juan@gmail.com"},
 * {nombre: "Ana", edad: 30, email: "ana@gmail.com},
 * {nombre: "Pedro", edad: 35, email: "pedro@gmail.com"}
 */
const dynamicTable= ( data, headers ) =>{
    //Creamos la tabla
    const table=document.createElement("table");
    const id="table-data-users";
    table.style.border = "1px solid"
    // Creamos el thread
    const thead=document.createElement("thead");
    //Creamos el tr
    const headerRow=document.createElement("tr");
    // recorremoms los headers
    headers.forEach(header => {
        //Creamos tantos th como voy necesitando
        const th=document.createElement("th");
        th.textContent=header;
        // ---------- SI QUIERO QUE AL HACER CLICK ORDENE LA TABLA ---------
        // aquí iria la lógica de organización
        // añadimos cada th al tr
        headerRow.appendChild(th);
    });
    // añadimos el tr al thead
    thead.appendChild(headerRow); // <--- tr inyectado
    
    // Creamos el tbody
    const tbody=document.createElement("tbody");
    // limpiamos la tabla
    tbody.innerHTML="";
    // recorremos los datos
    data.forEach(user=>{
        //Creamos cada tr
        document.createElement("tr");
        //recorremos los datos de cada usuario
        trUser.innerHTML=`
            <td>${user.nombre}</td>
            <td>${user.edad}</td>
            <td>${user.email}</td>
        `;
        // OTRA FORMA si quiero utilizar un bucle para recorrer las propiedades de cada objeto
        //inyectamos las tr al tBody
        tbody.appendChild(trUser);

    })
    table.append(thead, tbody);
    return table;
   
}
export default dynamicTable;