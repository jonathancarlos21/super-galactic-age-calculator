import {UserInfo} from '../src/logic';
import {exportAllDeclaration} from '@babel/types';

describe('UserInfo', () => {
  let newUser; 

  beforeEach(() => {
    newUser = new UserInfo();
  });

  test("Returns the user's name.", () => {
    newUser.addName("James");
    expect(newUser.name).toEqual("James");
  });

  test("Returns the user's age.", () => {
    newUser.addAge(27);
    expect(newUser.age).toEqual(27);
  });

  test("Returns the user's selected planet.", () => {
    newUser.addPlanet("Mercury");
    expect(newUser.planet).toEqual("Mercury");
  })

  test("Returns the user's age on the planet Mercury.", () => {
    newUser.addAge(27);
    newUser.addPlanet("Venus");
    newUser.ageMercury();
    expect(newUser.ageOnPlanet).toEqual(112);
  });

});