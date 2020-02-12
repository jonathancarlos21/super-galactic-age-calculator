import {UserInfo} from '../src/logic';
import {exportAllDeclaration} from '@babel/types';

describe('UserInfo', () => {
  let newUser; 

  beforeEach(() => {
    newUser = new UserInfo();
  });

  test("Returns the user's input name.", () => {
    newUser.addName("James");
    expect(newUser.name).toEqual("James");
  });

  test("Returns the user's input age.", () => {
    newUser.addAge(27);
    expect(newUser.age).toEqual(27);
  });

  test("Returns the user's selected planet.", () => {
    newUser.addPlanet("Mercury");
    expect(newUser.planet).toEqual("Mercury");
  })

  test("Returns the user's age on the planet Mercury.", () => {
    newUser.addAge(27);
    newUser.addPlanet("Mercury");
    newUser.ageMercury();
    expect(newUser.ageOnPlanet).toEqual(112);
  });

  test("Returns the user's age on the planet Venus.", () => {
    newUser.addAge(27);
    newUser.addPlanet("Venus");
    newUser.ageVenus();
    expect(newUser.ageOnPlanet).toEqual(43);
  });

  test("Returns the user's age on the planet Mars.", () => {
    newUser.addAge(27);
    newUser.addPlanet("Mars");
    newUser.ageMars();
    expect(newUser.ageOnPlanet).toEqual(14);
  });

  test("Returns the user's age on the planet Jupiter.", () => {
    newUser.addAge(27);
    newUser.addPlanet("Jupiter");
    newUser.ageJupiter();
    expect(newUser.ageOnPlanet).toEqual(2)
  }); 

  test("Returns the user's input life expectancy.", () => {
    newUser.addLifeExpectancy(80);
    expect(newUser.lifeExpectancy).toEqual(80);
  })

  test("Returns the user's life expectancy on the planet Mercury.", () => {
    newUser.addLifeExpectancy(80);
    newUser.addPlanet("Mercury");
    newUser.expectancyMercury();
    expect(newUser.expectancyOnPlanet).toEqual(333)
  });

  test("Returns the user's life expectancy on the planet Venus.", () => {
    newUser.addLifeExpectancy(80);
    newUser.addPlanet("Venus");
    newUser.expectancyVenus();
    expect(newUser.expectancyOnPlanet).toEqual(129);
  });

  test("Returns the user's life expectancy on the planet Mars.", () => {
    newUser.addLifeExpectancy(80);
    newUser.addPlanet("Mars");
    newUser.expectancyMars();
    expect(newUser.expectancyOnPlanet).toEqual(42);
  });

  test("Returns the user's life expectancy on the planet Jupiter.", () => {
    newUser.addLifeExpectancy(80);
    newUser.addPlanet("Jupiter");
    newUser.expectancyJupiter();
    expect(newUser.expectancyOnPlanet).toEqual(6);
  });

  test("Returns the number of years the user has lived past life expectancy.", () => {
    newUser.addAge(70);
    newUser.addLifeExpectancy(62);
    newUser.yearsBeyondExpectancy();
    expect(newUser.yearsPastExpectancy).toEqual(7);
  });
});