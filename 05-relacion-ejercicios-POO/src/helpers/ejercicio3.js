export function Empleado(nombre, edad, puesto){
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
    // salario lo hago compartido para la clase.
    Empleado.prototype.calcularSalario=function(){
        const salarioBase = {
            junior: 1500,
            senior: 2500,
            master: 5000
        };
        return salarioBase[this.puesto] || 0;

    };
    Empleado.prototype.info=function(){
        console.log(`${this.nombre} (${this.puesto}) (${this.calcularSalario()}€`)
    }
}

// subFunction constructora llamada EmpleadoFreeLance
export function EmpleadoFreeLance(nombre, edad, preciohora){
    Empleado.call(this, nombre, edad, "freelance");
    this.preciohora = preciohora;
    // tengo que heredar los métodos de la funcion constructora PADRE
    // para ello uso el método CALL
    EmpleadoFreeLance.prototype=Object.create(Empleado.prototype);
    // y que el constructor sea el del padre
    EmpleadoFreeLance.prototype.constructor=EmpleadoFreeLance;
    //Sobreescritura de método calcularSalario y el info 
    EmpleadoFreeLance.prototype.info=function(){
        
    }
}