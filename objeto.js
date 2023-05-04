let jogador = {nome: 'Nick', gols: 0, 
golear(g) {
    if (g > 1 || g == 0) {
        console.log(`${jogador.nome} fez ${g} gols`)
    } else {
        console.log(`${jogador.nome} fez ${g} gol`)
    }
    this.gols += g
}
}
jogador.golear(3)
