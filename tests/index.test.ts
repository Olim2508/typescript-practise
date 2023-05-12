import {digitalRoot} from "../codewars";


describe('testing digital root function', () => {
  test('test 2 digit number', () => {
    expect(digitalRoot(16)).toBe(7);
  });

  test('test 6 digit number', () => {
    expect(digitalRoot(132189)).toBe(6);
  });
});
