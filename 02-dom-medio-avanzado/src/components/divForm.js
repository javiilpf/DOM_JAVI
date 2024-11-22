export const divForm=()=>{
    
        //Crear un contenedor para mi formulario
        const divForm=document.createElement('div');
        //Le añado la clase al div
        divForm.classList.add('form-container');
        // Crear un formulario
        const formEmail=document.createElement('form');
        formEmail.classList.add('form');
        //crear el label
        const labelEmail=document.createElement('label');
        labelEmail.textContent='Email';
        //<input type="email" name="email" id="email" required>
        formEmail.appendChild(labelEmail); //<-- label inyectado
        const inputEmail=document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('name', 'email');
        inputEmail.id = 'email';
        inputEmail.setAttribute('placeholder', 'Escribe tu email'); 
        formEmail.appendChild(inputEmail); //<-- input inyectado

        // añadimos el formulario al contenedor
        divForm.appendChild(formEmail); // <-- Form inyectado


    //Creo label de verificación de email
    const pEmailCheck=document.createElement("p");
    
    pEmailCheck.id="email-check";
    pEmailCheck.textContent="Email no válido";
    pEmailCheck.style.color="red";
    pEmailCheck.style.display="none";
    divForm.appendChild(pEmailCheck); //<-- pEmailCheck inyectado

    // lógica de validacion de email
    // necesito una expresión igual regular de validación del email

    const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,6}$/
    inputEmail.addEventListener("input", ()=>{
        // evaluar si el email es válido
        const isValidEmail=emailRegex.test(inputEmail.value);
        pEmailCheck.style.display= isValidEmail ? "none":"block";
    })

    

    // Exportamos el contenedor
    return divForm; 

}