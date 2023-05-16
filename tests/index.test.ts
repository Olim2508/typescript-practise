import {digitalRoot, likes, reverseVowels} from "../codewars";


describe('testing digital root function', () => {
  test('test 2 digit number', () => {
    expect(digitalRoot(16)).toBe(7);
  });

  test('test 6 digit number', () => {
    expect(digitalRoot(132189)).toBe(6);
  });
});


describe('multiplication table', () => {

  test('test input 3', () => {
    expect(digitalRoot(3)).toBe([ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]);
  });
});


describe('reverse vowels', () => {

  test('1 word', () => {
    expect(reverseVowels("olim")).toBe("milo");
  });

  test('4 words', () => {
    expect(reverseVowels("typescript is the best")).toBe("tseb eht si tpircsepyt");
  });
});


describe('likes', () => {

  test('zero', () => {
    expect(likes([])).toBe("no one likes this");
  });

  test('1 person', () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
  });

  test('5 person', () => {
    expect(likes(["Peter", "John", "Tom", "Jack", "Bob"])).toBe("Peter, John and 3 others like this");
  });
});