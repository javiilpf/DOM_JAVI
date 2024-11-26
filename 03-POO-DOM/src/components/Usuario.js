export function Usuario(nombre, email, password){
    this.nombre=nombre; // variables públicas.
    this.email=email;
    let _password=password; // Variable privada
    //------ métodos públicos -------
    this.login =function(emailIntroducido, passwordIntroducido){
        // Comprobar el email y el password.
        if(this.email===emailIntroducido && _password===passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales";
    }
    // Actualizar el email
    this.updateEmail=function(newEmail){
        this.email=newEmail; 
        return `Email actualizado ${this.email}`;
    }

    // obtener toda la información del usuario

    this.getInfo =function(){
        return `Usuario ${this.nombre} - email: ${this.email}`;
    }
}



