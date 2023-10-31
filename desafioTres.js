class Hero {
  constructor(name, age, active) {
    this.name = name;
    this.age = age;
    this.active = active;
  }

  atack() {
    let atack = '';

    switch (this.active) {
      case 'mago':
        atack = 'magia';
        break;
      case 'guerreiro':
        atack = 'a espada';
        break;
      case 'monge':
        atack = 'artes marciais';
        break;
      case 'ninja':
        atack = 'o shuriken';
        break;
      default:
        atack = 'a sua coragem';
    }

    console.log(`O ${this.active} ${this.name} atacou usando ${atack}`);
  }
}

const hero1 = new Hero('Mestre dos Magos', 80, 'mago');
const hero2 = new Hero('Kratos', 50, 'guerreiro');
const hero3 = new Hero('Mestre Shifu', 160, 'monge');
const hero4 = new Hero('Gaiden', 30, 'ninja');

hero1.atack();
hero2.atack();
hero3.atack(); 
hero4.atack();
