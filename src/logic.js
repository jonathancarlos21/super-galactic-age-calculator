export class UserInfo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.planet = "";
    this.lifeExpectancy = 0;
    this.ageOnPlanet = 0;
  }

  addName(name) {
    this.name = name;
  }

  addAge(age) {
    this.age = age;
  }

  ageMercury() {
    let ageOnMercury = this.age/.24
    this.ageOnPlanet = ageOnMercury.toFixed(1);
  }
}