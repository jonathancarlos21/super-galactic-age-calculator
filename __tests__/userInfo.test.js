import {UserInfo} from '../src/logic';
import {exportAllDeclaration} from '@babel/types';

describe('UserInfo', () => {
  let newUser; 

  beforeEach(() => {
    newUser = new UserInfo();
  });

  test('User enters name.', () => {
    newUser.addName("James");
    expect(newUser.name).toEqual("James");
  });

  test('User enters age.', () => {
    newUser.addAge(27);
    expect(newUser.age).toEqual(27);
  });

  test('User enters age and planet.', () => {
    newUser.addAge(27);
    newUser.ageMercury("Mercury");
    expect(newUser.ageOnPlanet).toEqual(112.5);
  });
});