export function UsuarioFFabrica(nombre, email, password) {
    let _password = password;
    return {
        nombre,
        email,
        login(emailIntroducido, passwordIntroducida) {
            //comprobar el email y el password
            login = function(emailIntroducido, passwordIntroducida) {
                // Comprobar el email y el password.
                if (this.email === emailIntroducido && _password === passwordIntroducida) {
                    return `Bienvenido ${this.nombre}`;
                }
                return "Error en las credenciales";
            }
        },
        update(email) {
            updateEmail = function(newEmail) {
                this.email = newEmail;
                return `Email actualizado ${this.email}`;
            }
        },

        // obtener toda la información del usuario
        info(){

        
        getInfo = function() {
            return `Usuario ${this.nombre} - email: ${this.email}`;
        }
    }

    }
    
}
