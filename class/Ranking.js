class Ranking {
  constructor() {
    this.ranking = []
  }

  adicionarPontuacao(membro, pontos) {
    this.ranking.push({ membro, pontos })
    this.ranking.sort((a, b) => b.pontos - a.pontos)
  }

  mostrarRanking() {
    console.log("\n=== Ranking da Guilda ===")
    if (this.ranking.length === 0) {
      console.log("Ainda não há pontuações registradas.")
      return
    }

    this.ranking.forEach((item, index) => {
      console.log(`${index + 1}. ${item.membro} - ${item.pontos} pontos`)
    });
  }
}

module.exports = Ranking
