class Televisor {
  #encendido;
  #canal;
  #canales;
  #volumen;
  #marca;

  constructor(marca, canales) {
    this.encendido = false;
    this.#canal = 23;
    this.#volumen = 34;
    this.#canales = 100;
    this.#marca = "LG";
  }

  encender() {
    this.#encendido = true;
    return "La TV está encendida";
  }

  apagar() {
    this.#encendido = false;
    return "La TV está apagada";
  }

  verCanalSiguiente() {
    try {
      if (this.#encendido !== true) {
        throw Error("La Tv está apagada. Debes encenderla antes.");
      } else if (this.#canal === 100) {
        this.#canal = 1;
        return `El canal actual es ${this.#canal}`;
      } else {
        this.#canal = this.#canal + 1;
        return `El canal actual es ${this.#canal}`;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  verCanalAnterior() {
    try {
      if (this.#encendido !== true) {
        throw Error("La Tv está apagada. Debes encenderla antes.");
      } else if (this.#canal === 1) {
        this.#canal = 100;
        return `El canal actual es ${this.#canal}`;
      } else {
        this.#canal = this.#canal - 1;
        return `El canal actual es ${this.#canal}`;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  cambiarCanal(canal) {
    try {
      if (canal < 1 || canal > 100) {
        throw Error("Ese canal no existe, por favor introduzca uno válido.");
      } else {
        this.#canal = canal;
        return `El canal actual es ${this.#canal}`;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  subirVolumen() {
    try {
      if (this.#encendido !== true) {
        throw Error("La Tv está apagada. Debes encenderla antes.");
      } else if (this.#volumen >= 100) {
        throw Error("El volumen no puede subir más de 100.");
      } else {
        this.#volumen = this.#volumen + 1;
        return `El volumen actual es ${this.#volumen}`;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  bajarVolumen() {
    try {
      if (this.#encendido !== true) {
        throw Error("La Tv está apagada. Debes encenderla antes.");
      } else if (this.#volumen <= 0) {
        throw Error("El volumen no puede bajar más de 0.");
      } else {
        this.#volumen = this.#volumen - 1;
        return `El volumen actual es ${this.#volumen}`;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  toString() {
    return `La TV es marca ${this.#marca}, tiene un total de ${this.#canales}, el canal actual es ${this.#canal}, y su volumen axctual está en el valor ${this.#volumen}`;
  }
}

let tv = new Televisor("LG", 100);
console.log(tv.toString());
