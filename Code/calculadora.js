class Calculadora {
  #resultado;
  #sumar;
  #restar;
  #multiplicar;
  #dividir;

  constructor() {
    this.#resultado = 0;
  }

  obtenerResultado() {
    return this.#resultado;
  }

  reiniciar() {
    this.#resultado = 0;
  }

  //operaciones

  sumar(numero) {
    try {
      if (isNaN(numero)) {
        throw Error("No se ha introducido un número válido");
      } else {
        this.#resultado = this.#resultado + numero;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  restar(numero) {
    try {
      if (isNaN(numero)) {
        throw Error("No se ha introducido un número válido");
      } else {
        this.#resultado = this.#resultado - numero;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  multiplicar(numero) {
    try {
      if (isNaN(numero)) {
        throw Error("No se ha introducido un número válido");
      } else {
        this.#resultado = this.#resultado * numero;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  dividir(numero) {
    try {
      if (numero === 0) {
        throw Error("No es posible dividir por 0");
      } else {
        this.#resultado = this.#resultado / numero;
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

let calc = new Calculadora();
console.log(calc.obtenerResultado());
calc.sumar(10);
console.log(calc.obtenerResultado());
calc.dividir(5);
console.log(calc.obtenerResultado());
calc.dividir(0);
console.log(calc.obtenerResultado());
calc.multiplicar(8);
console.log(calc.obtenerResultado());
calc.multiplicar(8);
console.log(calc.obtenerResultado());
calc.reiniciar();
console.log(calc.obtenerResultado());
