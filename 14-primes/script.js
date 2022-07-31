/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

function primes(num) {
  const result = []
  for (let i = 2; i <= num; i++) {
    let count = 0
    for (let k = 2; k <= i; k++) {
      if (i % k === 0) {
        count++
      }
    }
    if (count >= 2) {
      continue
    } else {
      result.push(i)
    }
  }
  return result
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)) // [2, 3, 5]
console.log(primes(17)) // [2, 3, 5, 7, 11, 13, 17]
