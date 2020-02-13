export class UserInfo {
  constructor(name, planet) {
    this.name = name;
    this.age = 0;
    this.planet = planet;
    this.ageOnPlanet = 0;
    this.lifeExpectancy = 0;
    this.expectancyOnPlanet = 0;
    this.yearsPastExpectancy = 0;
    this.yearsLeftToLive = 0;
  }
//----Logic for the user's inputted information.----
  addName(name) {
    this.name = name;
  }

  addAge(age) {
    this.age = age;
  }

  addPlanet(planet) {
    this.planet = planet;
  }
//----Logic for the user's age based on the planet selected.----
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
//----Logic for the user's life expectancy based on planet selected.----
  addLifeExpectancy(lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
  }

  expectancyMercury() {
    let expectancyOnMercury = this.lifeExpectancy/.24;
    if (this.planet === "Mercury")
      this.expectancyOnPlanet = parseInt(expectancyOnMercury);
    if (this.ageOnPlanet > this.expectancyOnPlanet) {
      this.yearsPastExpectancy = (this.ageOnPlanet - this.expectancyOnPlanet);
    } else if (this.ageOnPlanet < this.expectancyOnPlanet) { 
        this.yearsLeftToLive = (this.expectancyOnPlanet - this.ageOnPlanet);
    }
  }

  expectancyVenus() {
    let expectancyOnVenus = this.lifeExpectancy/.62;
    if (this.planet === "Venus") {
      this.expectancyOnPlanet = parseInt(expectancyOnVenus);
    }
    if (this.ageOnPlanet > this.expectancyOnPlanet) {
      this.yearsPastExpectancy = (this.ageOnPlanet - this.expectancyOnPlanet);
    } else  if(this.ageOnPlanet < this.expectancyOnPlanet) {
        this.yearsLeftToLive = (this.expectancyOnPlanet - this.ageOnPlanet);
    }
  }

  expectancyMars() {
    let expectancyOnMars = this.lifeExpectancy/1.88;
    if (this.planet === "Mars") {
      this.expectancyOnPlanet = parseInt(expectancyOnMars);
    }
    if (this.ageOnPlanet > this.expectancyOnPlanet) {
      this.yearsPastExpectancy = (this.ageOnPlanet - this.expectancyOnPlanet);
    } else if (this.ageOnPlanet < this.expectancyOnPlanet) {
        this.yearsLeftToLive = (this.expectancyOnPlanet - this.ageOnPlanet);
    }
  }

  expectancyJupiter() {
    let expectancyOnJupiter = this.lifeExpectancy/11.86;
    if (this.planet === "Jupiter") {
      this.expectancyOnPlanet = parseInt(expectancyOnJupiter);
    }
    if (this.ageOnPlanet > this.expectancyOnPlanet) {
      this.yearsPastExpectancy = (this.ageOnPlanet - this.expectancyOnPlanet);
    } else if (this.ageOnPlanet < this.expectancyOnPlanet) {
        this.yearsLeftToLive = (this.expectancyOnPlanet - this.ageOnPlanet);
    }
  }
}