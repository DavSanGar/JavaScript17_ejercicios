class Auto {
  #encendido;
  #velocidad;
  #marca;
  #modelo;
  #patente;

  constructor(marca, modelo, patente) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#patente = patente;
    this.#velocidad = 0;
    this.#encendido = false;
  }

  arrancar() {
    this.#encendido = true;
    return "El vehículo está encendido.";
  }

  apagar() {
    try {
      if (this.#velocidad !== 0) {
        throw Error(
          `No es posible apagar el coche. Tiene una velocidad actual de ${this.#velocidad} km/h`,
        );
      } else {
        this.#encendido = false;
        return "El vehiculo está apagado.";
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  acelerar() {
    try {
      if (this.#encendido !== true) {
        throw Error("El vehículo no está arrancado");
      } else {
        this.#velocidad = this.#velocidad + 10;
        return `La velocidad ha aumentado a ${this.#velocidad} km/h`;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  desacelerar() {
    try {
      if (this.#encendido !== true) {
        throw Error("El vehículo no está arrancado");
      } else if (this.#velocidad === 0) {
        throw Error("El vehículo está parado. No es posible desacelerar.");
      } else {
        this.#velocidad = this.#velocidad - 10;
        return `El coche ha recudido la velocidad a ${this.#velocidad} km/h`;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  toString() {
    return `El coche es un ${this.#marca} ${this.#modelo} con la patente ${this.#patente}`;
  }
}

let coche1 = new Auto("hyundai", "i30", "fghmgfgdsdfsdv");
console.log(coche1.arrancar());
console.log(coche1.apagar());
console.log(coche1.arrancar());
console.log(coche1.acelerar());
console.log(coche1.acelerar());
console.log(coche1.acelerar());
console.log(coche1.desacelerar());
console.log(coche1.desacelerar());
console.log(coche1.desacelerar());
console.log(coche1.desacelerar());
console.log(coche1.acelerar());
console.log(coche1.acelerar());
console.log(coche1.acelerar());
console.log(coche1.desacelerar());
console.log(coche1.desacelerar());
console.log(coche1.desacelerar());
console.log(coche1.desacelerar());
console.log(coche1.desacelerar());
console.log(coche1.apagar());
console.log(coche1.acelerar());
console.log(coche1.arrancar());
console.log(coche1.acelerar());
console.log(coche1.apagar());
console.log(coche1.toString());
console.log(coche1.acelerar());
