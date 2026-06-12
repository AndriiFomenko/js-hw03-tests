console.log('#3. JavaScript homework example file')

/*
 * #1
 *
 * Створіть об'єкт userObj, що описує людину.
 *
 * Наступні поля обов'язкові:
 * firstName - будь-яке ім'я, рядок
 * lastName - будь-яке прізвище, рядок
 * age - будь-який вік, число
 */

var userObj = {
  age: 20,
  firstName: 'John',
  lastName: 'Smith',
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`
  }
}

console.log(userObj)

/*
 * #2
 *
 * Для об'єкта з п.1 створіть метод fullName(), що повертає коректне повне ім'я, яке є конкатенацією firstName та lastName через пробіл.

 * Наприклад:
 * userObj.firstName ← 'John'
 * userObj.lastName  ← 'Smith'
 * userObj.fullName() → 'John Smith'.
 */

// ! Або одразу створюємо метод в об'єкті userObj, або додамо до об'єкту пізніше.
// userObj.fullName = function () {
//   return `${userObj.firstName} ${userObj.lastName}`
// }
console.log(userObj.fullName()) // John Smith

/*
 * #3
 *
 * Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр, тобто: defUpperStr('My text') → 'MY TEXT'.
 *
 * Якщо функція викликається без параметра defUpperStr(), вона не повинна повертати undefined, у цьому випадку потрібно повернути рядок тексту за замовчуванням у верхньому регістрі, тобто defUpperStr() → 'DEFAULT TEXT'.
 *
 * При виконанні завдання не використовуйте оператор if, потрібен розв'язок із логічним оператором ||.
 */

function defUpperStr(str) {
  return (str || 'Default text').toUpperCase()
}

console.log(defUpperStr('My text')) // MY TEXT
console.log(defUpperStr())             // DEFAULT TEXT

/*
 * #4
 *
 * Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n.
 * Функція повинна повернути масив, що складається тільки з парних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти до підсумкового масиву,
 * цикл має працювати до n включно,
 * дозволено тільки оператор for.
 *
 * Наприклад:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

function evenFn(n) {
  let arr = []

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      // arr[arr.length] = i; // можливий варіант
      arr.push(i) // кращий варіант
    }
  }

  return arr
}

console.log(evenFn(10)) // [2, 4, 6, 8, 10]
console.log(evenFn(15)) // [2, 4, 6, 8, 10, 12, 14]
console.log(evenFn(20)) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * #5
 *
 * Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
 * Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.
 *
 * Наприклад:
 * 1   → 'Понеділок'
 * 2   → 'Вівторок'
 * ...
 * 7   → 'Неділя'
 * 9   → null
 * 1.5 → null
 * '2' → null
 * У реалізації функції обов'язково мають бути використані оператори switch / case / default.
 */
function weekFn(n) {
  let str = ''

  switch (n) {
    case 1:
      str = 'Понеділок'
      break
    case 2:
      str = 'Вівторок'
      break
    case 3:
      str = 'Середа'
      break
    case 4:
      str = 'Четвер'
      break
    case 5:
      str = 'П\'ятниця'
      break
    case 6:
      str = 'Субота'
      break
    case 7:
      str = 'Неділя'
      break
    default:
      str = null
  }

  return str
}

console.log(weekFn(1))   // 'Понеділок'
console.log(weekFn(3))   // 'Середа'
console.log(weekFn(7))   // 'Неділя'
console.log(weekFn(9))   // null
console.log(weekFn(1.5)) // null
console.log(weekFn('2')) // null

/*
 * #6
 *
 * Створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами, n:
 * менше 0   - null (зверніть увагу, що це саме null, а не рядок)
 * 0..24     - 'Дитинство'
 * 24+...44  - 'Молодість'
 * 44+..65   - 'Зрілість'
 * 65+..75   - 'Старість'
 * 75+..90   - 'Довголіття'
 * 90+..122  - 'Рекорд'
 * понад 122 - null (зверніть увагу, що це саме null, а не рядок)
 *
 * При виконанні завдання допускається використовувати тільки тернарний оператор ?:
 * Використання операторів if, switch - заборонено.
 */

// function ageClassification(n) {
//   return n >= 0
//     ? n > 24
//       ? n > 44
//         ? n > 65
//           ? n > 75
//             ? n > 90
//               ? n > 122
//                 ? null
//                 : 'Рекорд'
//               : 'Довголіття'
//             : 'Старість'
//           : 'Зрілість'
//         : 'Молодість'
//       : 'Дитинство'
//     : null
// }

// Можна покращити попередній варіант
function ageClassification(n) {
  return n < 0 ? null :
    n <= 24 ? 'Дитинство' :
      n <= 44 ? 'Молодість' :
        n <= 65 ? 'Зрілість' :
          n <= 75 ? 'Старість' :
            n <= 90 ? 'Довголіття' :
              n <= 122 ? 'Рекорд' : null
}


console.log('    -1 :', ageClassification(-1)) // -1 : null
console.log('     0 :', ageClassification(0)) // 0 : Дитинство
console.log('     1 :', ageClassification(1)) // 1 : Дитинство
console.log('    24 :', ageClassification(24)) // 24 : Дитинство
console.log(' 24.01 :', ageClassification(24.01)) // 24.01 : Молодість
console.log('    44 :', ageClassification(44)) // 44 : Молодість
console.log(' 44.01 :', ageClassification(44.01)) // 44.01 : Зрілість
console.log('    65 :', ageClassification(65)) // 65 : Зрілість
console.log('  65.1 :', ageClassification(65.1)) // 65.1 : Старість
console.log('    75 :', ageClassification(75)) // 75 : Старість
console.log(' 75.01 :', ageClassification(75.01)) // 75.01 : Довголіття
console.log('    90 :', ageClassification(90)) // 90 : Довголіття
console.log(' 90.01 :', ageClassification(90.01)) // 90.01 : Рекорд
console.log('   122 :', ageClassification(122)) // 122 : Рекорд
console.log('122.01 :', ageClassification(122.01)) // 122.01 : null
console.log('   150 :', ageClassification(150)) // 150 : null

/*
 Блок тестування, скрізь мають бути true:
 console.log('    -1 :', ageClassification(-1) === null); // -1 : null
 console.log('     0 :', ageClassification(0) === 'Дитинство') // 0 : Дитинство
 console.log('     1 :', ageClassification(1) === 'Дитинство'); // 1 : Дитинство
 console.log('    24 :', ageClassification(24) === 'Дитинство'); // 24 : Дитинство
 console.log(' 24.01 :', ageClassification(24.01) === 'Молодість'); // 24.01 : Молодість
 console.log('    44 :', ageClassification(44) === 'Молодість'); // 44 : Молодість
 console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість'); // 44.01 : Зрілість
 console.log('    65 :', ageClassification(65) === 'Зрілість'); // 65 : Зрілість
 console.log('  65.1 :', ageClassification(65.1) === 'Старість'); // 65.1 : Старість
 console.log('    75 :', ageClassification(75) === 'Старість'); // 75 : Старість
 console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття'); // 75.01 : Довголіття
 console.log('    90 :', ageClassification(90) === 'Довголіття'); // 90 : Довголіття
 console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд'); // 90.01 : Рекорд
 console.log('   122 :', ageClassification(122) === 'Рекорд'); // 122 : Рекорд
 console.log('122.01 :', ageClassification(122.01) === null); // 122.01 : null
 console.log('   150 :', ageClassification(150) === null); // 150 : null
*/

/*
 * #7
 *
 * Створіть функцію oddFn(n), яка приймає параметром число - кількість ітерацій циклу.
 * Функція повинна повернути масив, що складається тільки з непарних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти до підсумкового масиву,
 * цикл має працювати до n включно,
 * дозволено тільки оператор while.
 *
 * Наприклад:
 * oddFn(10) → [1, 3, 5, 7, 9]
 * oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
 * oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 */

function oddFn(n) {
  let arr = []
  let i = 0

  while (i++ < n) if (i % 2 !== 0) arr.push(i)

  return arr
}

console.log(oddFn(10)) // [1, 3, 5, 7, 9]
console.log(oddFn(15)) // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)) // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

/*
 * #8
 *
 * Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:
 * a - число,
 * b - число,
 * callback - функція зворотного виклику, що обробляє параметри a і b.
 *
 * Реалізуйте перевірку: якщо третім параметром передається не функція, потрібно повернути false.
 */

function mainFunc(a, b, callback) {
  if (callback && typeof callback === 'function') return callback(a, b)

  return false
}

/*
 * Реалізуйте callback функції (cbRandom, cbPow, cbAdd) до основної функції (mainFunc), що повертатимуть відповідні результати обчислень.
 * Використовуйте Math для піднесення до степеня (Math.pow) та генерації випадкових чисел (Math.floor, Math.random).
 */

// cbRandom(min, max) - обчислює і повертає довільне ціле число в діапазоні між min і max включно.
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// cbPow(num, pow) - обчислює і повертає результат піднесення числа num до степеня pow.
function cbPow(num, pow) {
  return Math.pow(num, pow)
}

// cbAdd(a, b) - обчислює і повертає суму двох чисел a і b.
function cbAdd(a, b) {
  return a + b
}

/*
 * mainFunc() повинна повертати результат роботи переданої їй функції зворотного виклику, наприклад:
 * mainFunc(2, 5, cbRandom) → випадково від 2 до 5 включно
 * mainFunc(10, 30, cbRandom) → випадково 10..30 включно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */
console.log(mainFunc(2, 5, cbRandom)) // цілі числа в діапазоні 2..5
console.log(mainFunc(2, 5, cbPow)) // 32
console.log(mainFunc(2, 5, cbAdd)) // 7
console.log(mainFunc(2, 5, 'not a func')) // false

export { userObj, defUpperStr, evenFn, weekFn, ageClassification, oddFn, mainFunc, cbRandom, cbPow, cbAdd }
