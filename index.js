var nameHero = "Capitão Stress";
var xpHero = 9300;
var levelHero;

switch (true) {
    case xpHero < 1000:
        levelHero = "Ferro";
        break;
    case xpHero >= 1001 && xpHero <= 2000:
        levelHero = "Bronze";
        break;
    case xpHero >= 2001 && xpHero <= 5000:
        levelHero = "Prata";
        break;
    case xpHero >= 6001 && xpHero <= 7000:
        levelHero = "Ouro";
        break;
    case xpHero >= 7001 && xpHero <= 8000:
        levelHero = "Platina";
        break;
    case xpHero >= 8001 && xpHero <= 9000:
        levelHero = "Ascendente";
        break;
    case xpHero >= 9001 && xpHero <= 10000:
        levelHero = "Imortal";
        break;
    default:
        levelHero = "Radiante";
}

console.log(`O Herói de nome ${nameHero} está no nível de ${levelHero}`);