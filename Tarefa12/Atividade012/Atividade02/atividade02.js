class Contato {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
  
class Agenda {
    constructor() {
        this.contatos = [];
    }
  
    adicionarContato(nome, email) {
        const novoContato = new Contato(nome, email);
        this.contatos.push(novoContato);
    }
  
    buscarContatoPorNomeOuEmail(chave) {
        return this.contatos.find(
        contato =>
            contato.nome.toLowerCase() === chave.toLowerCase() ||
            contato.email.toLowerCase() === chave.toLowerCase()
        );
    }
  
    excluirContatoPorNome(nome) {
        const indice = this.contatos.findIndex(
            contato => contato.nome.toLowerCase() === nome.toLowerCase()
        );
  
        if (indice !== -1) {
            this.contatos.splice(indice, 1);
            console.log(`Contato "${nome}" removido com sucesso.`);
        } else {
            console.log(`Contato "${nome}" não encontrado.`);
        }
    }
  
    listarContatos() {
        if (this.contatos.length === 0) {
            console.log("Agenda vazia.");
        } else {
            console.log("Contatos na agenda:");
            this.contatos.forEach(contato => {
            console.log(`Nome: ${contato.nome}, Email: ${contato.email}`);
        });
      }
    }
}
  
const minhaAgenda = new Agenda();
  
minhaAgenda.adicionarContato("João", "joao@gmail.com");
minhaAgenda.adicionarContato("Maria", "maria@gmail.com");
minhaAgenda.adicionarContato("Ana", "ana@gmail.com");

console.log("Buscando contato pelo nome 'Maria':");
const contatoPorNome = minhaAgenda.buscarContatoPorNomeOuEmail("Maria");
console.log(contatoPorNome);

console.log("Buscando contato pelo email 'ana@gmail.com':");
const contatoPorEmail = minhaAgenda.buscarContatoPorNomeOuEmail("ana@gmail.com");
console.log(contatoPorEmail);

console.log("Excluindo contato 'João':");
minhaAgenda.excluirContatoPorNome("João");

console.log("Listando contatos:");
minhaAgenda.listarContatos();