function calculateLevel(victories, loses) {
    var balanceVictories = victories - loses;
    var level;

    if (victories < 10) {
        level = "Ferro";
    } else if (victories >= 11 && victories <= 20) {
        level = "Bronze";
    } else if (victories >= 21 && victories <= 50) {
        level = "Prata";
    } else if (victories >= 51 && victories <= 80) {
        level = "Ouro";
    } else if (victories >= 81 && victories <= 90) {
        level = "Diamante";
    } else if (victories >= 91 && victories <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    return { balanceVictories, level };
}

var victoriesHero = 85;
var losesHero = 10;

var result = calculateLevel(victoriesHero, losesHero);

console.log(`O Herói tem um saldo de ${result.balanceVictories} e está no nível de ${result.level}`);
