// Classe Heroi com atributos e método atacar

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Thorgar", 40, "guerreiro");
const heroi3 = new Heroi("Liu Kang", 35, "monge");
const heroi4 = new Heroi("Ryu Hayabusa", 29, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
