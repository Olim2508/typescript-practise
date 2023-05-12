

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

// console.log(solution(10))
console.log(digitalRoot(942))

export function multiplicationTable (size: number): number[][] {
    console.log('dsasda')
  // Implement me! :)
    return [[]]
}

// console.log(multiplicationTable(3))