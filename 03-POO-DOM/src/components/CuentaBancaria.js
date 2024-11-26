class cuentaBancaria{
    #saldo;
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.#saldo = saldo;
    }
    
    get saldo(){
        return this.#saldo;
    }

    depositar(monto){
        this.saldo += monto;
    }
    retirar(monto){
        this.saldo -= monto;
    }

}

