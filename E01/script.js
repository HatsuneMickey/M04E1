const number1 = Number(prompt('Digite o primeiro número: '))
const number2 = Number(prompt('Digite o segundo número: '))

let sum = number1 + number2
alert(`A soma dos dois números é: ${sum}`)

let subtraction = number1 - number2
alert(`A subtração dos dois números é: ${subtraction}`)

let multiplication = number1 * number2
alert(`A multiplicação dos dois números é: ${multiplication}`)

let division = number1 / number2
division = division.toFixed(0)
alert(`A divisão dos dois números é: ${division}`)

let remainder = number1 % number2
alert(`O resto da divisão dos dois números é: ${remainder}`)

if (sum % 2 != 0) {
    alert(`A soma dos dois números é ímpar: ${sum}`)
}
else {
    alert(`A soma dos dois números é par: ${sum}`)
}

if (number1 != number2) {
    alert('Os números inseridos são diferentes')
}
else {
    alert('Os números inseridos são iguais')
}