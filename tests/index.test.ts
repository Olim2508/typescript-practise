import {digitalRoot} from "../codewars";


describe('testing digital root function', () => {
  test('test 2 digit number', () => {
    expect(digitalRoot(16)).toBe(7);
  });
});