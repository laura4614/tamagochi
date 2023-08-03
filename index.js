class Tamagotchi {
  constructor() {
    this.nombre = "Bandicam";
    this.hambre = 0;
    this.felicidad = 0;
    this.energia = 100;
  }

  nacer() {
    setInterval(() => {
      this.estadoActual();
      this.mostrarEstado;
      this.hambre += 5;
      this.felicidad += 5;
      this.energia -= 5;
      this.revisionEstado();
    }, 4000);
  }

  detener() {
    clearInterval(vida);
    this.mostrarAlerta(`El Tamagotchi ${this.nombre} ha sido detenido.`);
  }

  comer() {
    this.hambre -= 10;
    this.felicidad += 5;
    this.energia += 5;
    this.mostrarAlerta(`you have fed ${this.nombre}.`);
    this.revisionEstado();
  }

  jugar() {
    this.hambre += 5;
    this.felicidad += 5;
    this.energia -= 10;
    this.mostrarAlerta(`you have exercised ${this.nombre}.`);
    this.revisionEstado();
  }

  dormir() {
    this.hambre += 5;
    this.felicidad -= 10;
    this.energia += 10;
    this.mostrarAlerta(`Has puesto a dormir a ${this.nombre}.`);
    this.revisionEstado();
  }

  estadoActual() {
    console.log(
      `Estado de ${this.nombre}: Hambre: ${this.hambre}, Felicidad: ${this.felicidad}, Energía: ${this.energia}`
    );
  }

  revisionEstado() {
    if (this.hambre >= 60) {
      this.mostrarAlerta(`${this.nombre} tiene mucha hambre. ¡Aliméntalo!`);
      this.mostrarEstado();
    }

    if (this.felicidad <= 10) {
      this.mostrarAlerta(
        `${this.nombre} He is sad. Play with him to cheer him up!`
      );
      this.mostrarEstado();
    }
    if (this.energia <= 20) {
      this.mostrarAlerta(`${this.nombre} Is it sold out. Put him to sleep!`);
      this.mostrarEstado();
    }
  }

  mostrarEstado() {
    const estadoElement = document.getElementById("estado");
    estadoElement.innerHTML = `Hambre: ${this.hambre}, Felicidad: ${this.felicidad}, Energía: ${this.energia}`;
  }

  mostrarAlerta(mensajeAlerta) {
    const alerta = document.getElementById("alerta");
    alerta.innerHTML = mensajeAlerta;
  }

  revivir() {
    if (this.hambre >= 100 || this.felicidad <= 0 || this.energia <= 0) {
      this.mostrarAlerta(`${this.nombre} ha sido revivido.`);
      this.hambre = 0;
      this.felicidad = 0;
      this.energia = 100;
    }
  }
}

const Kutchipachi = new Tamagotchi();

vida = setTimeout(() => {
  Kutchipachi.detener();
}, 200000);

Kutchipachi.nacer();
Kutchipachi.mostrarEstado();
Kutchipachi.estadoActual();

const $btnComer = document.getElementById("btn-comer"),
  $btnJugar = document.getElementById("btn-jugar"),
  $btnDormir = document.getElementById("btn-dormir");

function cambioEstado(imagen) {
  const $imagen = document.getElementById("tamagotchi");
  $imagen.src = imagen;
}

document.addEventListener("click", (e) => {
  if (e.target === $btnComer) {
    cambioEstado("./assets/co.gif");
    banbicamp.comer();
    banbicamp.mostrarEstado();
  }
  if (e.target === $btnJugar) {
    cambioEstado("./assets/source.gif");
    Kutchipachi.jugar();
    banbicamp.mostrarEstado();
  }
  if (e.target === $btnDormir) {
    cambioEstado("./assets/tenor.gif");
    bambicamp.dormir();
    bambicamp.mostrarEstado();
  } 
});

