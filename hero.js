let nome="Conan";
let nivelXP=3780;
let nivel;

for (let contador = 0; contador < 1; contador++) {
    switch(nivelXP) {
        case (nivelXP <= 1000):
            nivel="Ferro";
        case (nivelXP > 1001 && nivelXP <= 2000):
            nivel="Bronze";
        case (nivelXP > 2001 && nivelXP <= 5000):
            nivel="Prata";
        case (nivelXP > 5001 && nivelXP <= 7000):
            nivel="Ouro";
        case (nivelXP > 7001 && nivelXP <= 8000):
            nivel="Platina";
        case (nivelXP > 8001 && nivelXP <= 9000):
            nivel="Ascendente";
        case (nivelXP > 9001 && nivelXP <= 10000):
            nivel="Imortal";
        case (nivelXP > 10001):
            nivel="Radiante";
    }

    console.log("O Herói de nome "+nome+" está no nível: "+nivel);
}
