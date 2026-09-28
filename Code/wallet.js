class Movimientos {
  descripcion;
  cantidad;
  fecha;
  categoria;

  constructor(descripcion, cantidad, fecha, tipo, categoria) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.tipo = tipo;
    this.categoria = categoria;
  }
}

class Billetera {
  #monto;
  #operaciones;

  constructor(montoInicial = 0) {
    this.#monto = montoInicial;
    this.#operaciones = [];
  }

  agregarMovimiento(movi) {
    this.#operaciones.push(movi);
    if (movi.tipo === "gasto") {
      this.#monto = this.#monto - movi.cantidad;
    } else {
      this.#monto = this.#monto + movi.cantidad;
    }
  }

  obtenerGastosMes(mes) {
    return this.#operaciones.filter(
      (operacion) =>
        operacion.fecha.getMonth() === mes && operacion.tipo === "gasto",
    );
  }

  obtenerGananciasMes(mes) {
    return this.#operaciones.filter(
      (operacion) =>
        operacion.fecha.getMonth() === mes && operacion.tipo === "ingreso",
    );
  }

  obtenerGastosCategoria(cat) {
    return this.#operaciones.filter(
      (movimiento) =>
        movimiento.tipo === "gasto" && movimiento.categoria === cat,
    );
  }

  obtenerGananciasCategoria(cat) {
    return this.#operaciones.filter(
      (movimiento) =>
        movimiento.tipo === "ingreso" && movimiento.categoria === cat,
    );
  }

  calcularTotalMes(mes) {
    return this.#operaciones
      .filter((movimiento) => movimiento.fecha.getMonth() === mes)
      .reduce((total, movimiento) => {
        if (movimiento.tipo === "gasto") {
          total = total - movimiento.cantidad;
        } else {
          total = total + movimiento.cantidad;
        }
        return total;
      }, 0);
  }

  calcularTotalCategoria(cat) {
    return this.#operaciones
      .filter((movimiento) => movimiento.categoria === cat)
      .reduce((total, movimiento) => {
        if (movimiento.tipo === "gasto") {
          total = total - movimiento.cantidad;
        } else {
          total = total + movimiento.cantidad;
        }
        return total;
      }, 0);
  }

  obtenerMonto() {
    return this.#monto;
  }
}

let cartera = new Billetera();

let m0 = new Movimientos(
  "Nomina",
  2200,
  new Date(2026, 5, 1, 0, 0, 0),
  "ingreso",
  "nomina",
);

let m1 = new Movimientos(
  "Compra",
  120,
  new Date(2026, 5, 13, 20, 10, 0),
  "gasto",
  "comida",
);

let m2 = new Movimientos(
  "Gasoil",
  70,
  new Date(2026, 5, 5, 13, 25, 0),
  "gasto",
  "combustible",
);

cartera.agregarMovimiento(m0);
console.log(cartera);
cartera.agregarMovimiento(m1);
cartera.agregarMovimiento(m2);
console.log(cartera);
console.log(cartera.obtenerGastosMes(5));
console.log(cartera.obtenerGananciasMes(5));
console.log(cartera.obtenerGastosCategoria("combustible"));
console.log(cartera.calcularTotalMes(5));
console.log(cartera.calcularTotalCategoria("comida"));
