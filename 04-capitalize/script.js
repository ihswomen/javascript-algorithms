/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const result = str.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return result.join(' ')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')) // "Молодость Всё Простит"
