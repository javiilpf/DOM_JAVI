// Inicio de sesión
export default function formComponent(){
    const divFormLogin=document.createElement('div');
    divFormLogin.classList.add='form-container-login';
    divFormLogin.id='form-container-login';
    // crear un formulario
    const formEmail=document.createElement('form');
    formEmail.id='form-login';
    // label username
    const labelUsername=document.createElement('label')
    labelUsername.textContent="Username";
    // input username
    const inputUsername=document.createElement('input');
    inputUsername.id="username"
    inputUsername.type="text";
    inputUsername.name="Username";
    inputUsername.placeholder="Escribe tu username";

    //label password
    const labelPassword=document.createElement('label')
    labelPassword.textContent="Password";
    // input password
    const inputPassword=document.createElement('input');
    inputPassword.id="password"
    inputPassword.type="password";
    inputPassword.name="Password";
    inputPassword.placeholder="Escribe tu contraseña";

    //button
    const button=document.createElement('button');
    buttonLogin.id="button-login";
    buttonLogin.type="submit";
    buttonLogin.textContent="Iniciar sesión";
    //añadimos TODOS los elementos al formulario
    formEmail.append(
        labelUsername, 
        inputUsername, 
        labelPassword, 
        inputPassword, 
        button
    );
    
    divFormLogin.append(formEmail); // <-- Form inyectado

    return divFormLogin; // <-- Div con el formulario en el DOM

}