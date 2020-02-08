export class UserInfo {
  constructor(name, planet) {
    this.name = name;
    this.age = 0;
    this.planet = planet;
    this.lifeExpectancy = 0;
    this.ageOnPlanet = 0;
  }

  addName(name) {
    this.name = name;
  }

  addAge(age) {
    this.age = age;
  }

  addPlanet(planet) {
    this.planet = planet;
  }

  ageMercury() {
    let ageOnMercury = this.age/.24;
    if (this.planet === "Mercury")
    this.ageOnPlanet = ageOnMercury.toFixed(1);
  }
}