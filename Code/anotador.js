class Anotador {
  #titulo;
  #notas;

  constructor(titulo) {
    this.#titulo = titulo;
    this.#notas = [];
  }

  agregarNota(nota) {
    this.#notas.push(nota);
  }

  actualizarNota(id, nota) {
    this.#notas[id] = nota;
  }

  obtenerNota(id) {
    return this.#notas[id];
  }

  eliminarNota(id) {
    this.#notas.splice(id, 1);
  }

  eliminarNotas() {
    this.#notas = [];
  }

  listarNotas() {
    return this.#notas.reduce((salida, nota, index) => {
      return `${salida} \n ${index + 1}. ${nota}`;
    }, `${this.#titulo}\n ------------------\n`);
  }
}

let lista = new Anotador("Lista de la compra");
lista.agregarNota("Jamón");
console.log(lista.listarNotas());
lista.agregarNota("Cerveza");
console.log(lista.listarNotas());
lista.agregarNota("Pan de molde");
console.log(lista.listarNotas());
console.log(lista.obtenerNota(2));
lista.actualizarNota(1, "Lentejas");
console.log(lista.listarNotas());
lista.eliminarNota(0);
console.log(lista.listarNotas());
lista.eliminarNotas();
console.log(lista.listarNotas());
