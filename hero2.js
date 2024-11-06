let vitoria = 15;
let derrota = 7;
const saldoVitoria = vitoria - derrota;

function nivelHeroi(vitoria) {
    let nivel;

    for (let contador = 0; contador < 1; contador++) {
        switch(vitoria) {
            case (vitoria <= 10):
                nivel="Ferro";
            case (vitoria > 11 && vitoria <= 20):
                nivel="Bronze";
            case (vitoria > 21 && vitoria <= 50):
                nivel="Prata";
            case (vitoria > 51 && vitoria <= 70):
                nivel="Ouro";
            case (vitoria > 71 && vitoria <= 80):
                nivel="Platina";
            case (vitoria > 81 && vitoria <= 90):
                nivel="Ascendente";
            case (vitoria > 91 && vitoria <= 100):
                nivel="Imortal";
            case (vitoria > 101):
                nivel="Radiante";

                return nivel
        }
    }

    console.log("O Herói tem de saldo de "+saldoVitoria+" e está no nível de "+nivel);
}