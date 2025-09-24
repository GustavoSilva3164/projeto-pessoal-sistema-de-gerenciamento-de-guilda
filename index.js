const prompt = require("prompt-sync")()
const Membro = require("./class/Membro")
const Guilda = require("./class/Guilda")
const Evento = require("./class/Evento")
const Ranking = require("./class/Ranking")


const nomeGuilda = prompt("Digite o nome da guilda: ")
const guilda = new Guilda(nomeGuilda)
const ranking = new Ranking()

function adicionarMembro() {
  const nome = prompt("Nome do membro: ")
  const cargo = prompt("Cargo na guilda (Ex: Líder, Oficial, Recruta): ")

  let extraInfo = ""
  const desejaInfo = prompt("Deseja adicionar alguma informação extra? (S/N): ").toLowerCase()

  if (desejaInfo === "s") {
    extraInfo = prompt("Digite a informação extra (Ex: Classe, Servidor, Profissão): ")
  }

  const novoMembro = new Membro(nome, cargo, extraInfo)
  guilda.adicionarMembro(novoMembro)

  console.log(`Membro ${nome} adicionado à guilda ${guilda.nome}.`)
}

function listarMembros() {
  guilda.listarMembros()
}

function criarEvento() {
  const nomeEvento = prompt("Nome do evento: ")
  const dataEvento = prompt("Data do evento (Ex: 25/12/2025): ")
  const descricaoEvento = prompt("Descrição do evento: ")

  const novoEvento = new Evento(nomeEvento, dataEvento, descricaoEvento)
  guilda.adicionarEvento(novoEvento)

  console.log(`Evento "${nomeEvento}" criado com sucesso!`)
}

function listarEventos() {
  guilda.listarEventos()
}

function removerMembro() {
  const nome = prompt("Nome do membro a ser removido: ")
  guilda.removerMembro(nome)
  console.log(`Membro ${nome} removido da guilda.`)
}

function adicionarPontuacaoRanking() {
  const nome = prompt("Nome do membro: ")
  const pontos = parseInt(prompt("Pontuação a adicionar: "))
  ranking.adicionarPontuacao(nome, pontos)
  console.log(`Pontuação adicionada para ${nome}: ${pontos} pontos`)
}

function mostrarRanking() {
  ranking.mostrarRanking()
}

while (true) {
  console.log(`\n===== MENU GUILDA: ${guilda.nome} =====`)
  console.log("1 - Adicionar membro")
  console.log("2 - Listar membros")
  console.log("3 - Criar evento")
  console.log("4 - Listar eventos")
  console.log("5 - Remover membro")
  console.log("6 - Adicionar pontuação ao ranking")
  console.log("7 - Mostrar ranking")
  console.log("0 - Sair")

  const opcao = prompt("Escolha uma opção: ")

  if (opcao === "1") {
    adicionarMembro()
  } else if (opcao === "2") {
    listarMembros()
  } else if (opcao === "3") {
    criarEvento()
  } else if (opcao === "4") {
    listarEventos()
  } else if (opcao === "5") {
    removerMembro()
  } else if (opcao === "6") {
    adicionarPontuacaoRanking()
  } else if (opcao === "7") {
    mostrarRanking()
  } else if (opcao === "0") {
    console.log("Saindo do sistema...");
    break
  } else {
    console.log("Opção inválida! Tente novamente.")
  }
}
