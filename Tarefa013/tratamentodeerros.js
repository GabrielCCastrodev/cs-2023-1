class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      console.log("O animal emite um som");
    }
  }
  
  class Cachorro extends Animal {
    correr() {
      console.log("Correr como cachorro");
    }
  
    emitirSom() {
      console.log("O cachorro está emitindo som");
    }
  }
  
  class Cavalo extends Animal {
    correr() {
      console.log("Correr como cavalo");
    }
  
    emitirSom() {
      console.log("O cavalo está emitindo som");
    }
  }
  
  class Preguica extends Animal {
    subirEmArvores() {
      console.log("A preguiça sobe em árvores");
    }
  
    emitirSom() {
      console.log("A preguiça está emitindo som");
    }
  }
  
  class AnimalInvalidoException extends Error {
    constructor() {
      super("Tipo de Animal Inválido");
      this.name = "AnimalInvalidoException";
    }
  }
  
  class Veterinario {
    examinar(animal) {
      if (animal instanceof Cachorro || animal instanceof Cavalo || animal instanceof Preguica) {
        console.log(`Examinando o animal ${animal.nome}`);
        animal.emitirSom();
      } else {
        throw new AnimalInvalidoException();
      }
    }
  }
  
  class Zoologico {
    constructor() {
      this.jaulas = [];
    }
  
    adicionarAnimal(animal) {
      this.jaulas.push(animal);
    }
  
    emitirSons() {
      for (const animal of this.jaulas) {
        animal.emitirSom();
        if (animal.correr) {
          animal.correr();
        }
        if (animal.subirEmArvores) {
          animal.subirEmArvores();
        }
      }
    }
  }
  
  const cachorro = new Cachorro("Doguinho", 5);
  const cavalo = new Cavalo("Pocotó", 8);
  const preguica = new Preguica("Sábado", 3);
  const veterinario = new Veterinario();
  const zoologico = new Zoologico();

  cachorro.emitirSom();
  cavalo.emitirSom();
  preguica.emitirSom();
  
  veterinario.examinar(cachorro);
  veterinario.examinar(cavalo);
  veterinario.examinar(preguica);
  
  zoologico.adicionarAnimal(cachorro);
  zoologico.adicionarAnimal(cavalo);
  zoologico.adicionarAnimal(preguica);
  zoologico.emitirSons();
  
  const animalTeste = new Animal("Nome Teste", 4);
  const animalTeste2 = new Animal("Nome Teste2", 6);

  try {
    veterinario.examinar(animalTeste);
  } catch (e) {
    if (e instanceof AnimalInvalidoException) {
      console.log(e.message);
    }
  } 
  try {
    veterinario.examinar(animalTeste2);
  } catch (e) {
    if (e instanceof AnimalInvalidoException) {
      console.log(e.message);
    }
  } 
  
