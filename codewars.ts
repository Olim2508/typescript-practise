

const solution = (num: number) => {
    if (num < 0) return 0;
    const divisors: number[] = []
    for (let i = 1; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            divisors.push(i)
        }
    }
    const sum: number = divisors.reduce((partialSum, a) => partialSum + a, 0)
    return sum
}
// console.log(solution(10))

export const digitalRoot = (n:number):number => {
    const n_str: string = n.toString()
  let sum = 0
  for (let i = 0; i < n_str.length; i++) {
    sum += parseInt(n_str[i])
  }
  if (sum.toString().length > 1) {
      return digitalRoot(sum)
  } else {
      return sum
  }
};
// console.log(digitalRoot(942))

export function multiplicationTable (size: number): number[][] {
  const resList: number[][] = []
  for (let i = 1; i <= size; i++) {
      const tempArr: number[] = []
      for (let j = 1; j <= size; j++) {
          tempArr.push(i * j)
      }
      resList.push(tempArr)
  }
  return resList
}
// console.log(multiplicationTable(4))


export function reverseVowels (str: string): string {
    // my version
  // const arr: string[] = []
  // for (let i = 0; i < str.length; i++) {
  //     arr.push(str[i])
  // }
  // return arr.reverse().join("")

    // version from internet
    return str.split("").reverse().join("");
}
// console.log(reverseVowels("typescript is the best"))


export const likes = (names : string[]) : string => {
    switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


console.log(likes(["Peter", "John", "Tom", "Jack", "Bob"]))