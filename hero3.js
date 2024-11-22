class heroi {
    constructor(nome, idade, tipo) {
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    Ataque(ataque) {
        this.ataque=ataque
        if (heroi.tipo=="Mercenário") {
            ataque = "Faca"
        } else if (heroi.tipo=="Guerreiro") {
            ataque = "Espada"
        } else if (heroi.tipo=="Bruxo") {
            ataque = "Magia"
        } else if (heroi.tipo=="Berseker") {
            ataque = "Machado"
        } else {
            ataque = "As mãos"
        }
    }
}

mercenario = new heroi("Cahara", 28, "Mercenário")
guerreiro = new heroi("Darc'e", 21, "Guerreiro")
bruxo = new heroi("Enki", 42, "Bruxo")
berseker = new heroi("Ragnalvdr", 17, "Berseker")
buckman = new heroi("Buckman", 35, "Escudeiro")

console.log(`O ${mercenario.tipo} atacou com ${Ataque.ataque}`)
