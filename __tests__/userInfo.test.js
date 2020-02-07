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
});