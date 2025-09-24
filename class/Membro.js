class Membro {
  constructor(nome, cargo, extraInfo = "") {
    this.nome = nome
    this.cargo = cargo
    this.extraInfo = extraInfo
    this.status = "Ativo"
  }

  desativar() {
    this.status = "Inativo"
  }
}

module.exports = Membro
