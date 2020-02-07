import {UserInfo} from '../src/logic';
import {exportAllDeclaration} from '@babel/types';

describe('UserInfo', () => {

  test('User enters name.', () => {
    let newUser = new UserInfo("James");
    expect(newUser.name).toEqual("James");
  });

  test('UserInfo', () => {
    let newUser = new UserInfo("not a number");
    expect(newUser.age).toEqual(27);
  });
});