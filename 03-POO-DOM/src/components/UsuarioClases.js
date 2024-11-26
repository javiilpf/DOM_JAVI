export class UsuarioClases{
    #password; // propiedad privada
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }
    //------ métodos públicos -------
    login =function(emailIntroducido, passwordIntroducido){
        // Comprobar el email y el password.
        if(this.email===emailIntroducido && _password===passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales";
    }
    // Actualizar el email
    updateEmail=function(newEmail){
        this.email=newEmail; 
        return `Email actualizado ${this.email}`;
    }

    // obtener toda la información del usuario

    getInfo =function(){
        return `Usuario ${this.nombre} - email: ${this.email}`;
    }
    
}