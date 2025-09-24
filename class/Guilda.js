class Guilda {
  constructor(nome) {
    this.nome = nome
    this.membros = []
    this.eventos = []
  }

  adicionarMembro(membro) {
    this.membros.push(membro)
  }

  removerMembro(nome) {
    this.membros = this.membros.filter(m => m.nome !== nome)
  }

  listarMembros() {
    console.log(`\n=== Membros da Guilda: ${this.nome} ===`)
    if (this.membros.length === 0) {
      console.log("Nenhum membro na guilda.")
      return;
    }

    this.membros.forEach((m, index) => {
      console.log(`${index + 1}. ${m.nome} | Cargo: ${m.cargo} | Extra: ${m.extraInfo || "Nenhum"} | Status: ${m.status}`);
    })
  }

  adicionarEvento(evento) {
    this.eventos.push(evento)
  }

  listarEventos() {
    console.log(`\n=== Eventos da Guilda: ${this.nome} ===`)
    if (this.eventos.length === 0) {
      console.log("Nenhum evento criado ainda.")
      return
    }

    this.eventos.forEach((e, index) => {
      console.log(`${index + 1}. ${e.nome} | Data: ${e.data} | Descrição: ${e.descricao}`)
    })
  }
}

module.exports = Guilda
