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
    this.ageOnPlanet = parseInt(ageOnMercury);
  }

  ageVenus() {
    let ageOnVenus = this.age/.62;
    if (this.planet === "Venus")
    this.ageOnPlanet = parseInt(ageOnVenus);
  }

  ageMars() {
    let ageOnMars = this.age/1.88;
    if (this.planet === "Mars")
    this.ageOnPlanet = parseInt(ageOnMars);
  }

  ageJupiter() {
    let ageOnJupiter = this.age/11.86;
    if (this.planet === "Jupiter")
    this.ageOnPlanet = parseInt(ageOnJupiter);
  }
}