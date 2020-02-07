import {UserInfo} from '../src/logic';
import {exportAllDeclaration} from '@babel/types';

describe('UserInfo', () => {

  test('User enters name.', () => {
    let newUser = new UserInfo("James");
    expect(newUser.name).toEqual("James");
  });

  test('User enters age.', () => {
    let newUser = new UserInfo("");
    expect(newUser.age).toEqual("");
  });
});