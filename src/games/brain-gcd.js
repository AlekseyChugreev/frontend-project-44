import _ from 'lodash'
import { commonLogic } from '../index.js'
export { game }

const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

const information = 'Find the greatest common divisor of given numbers.'
const localLogic = () => {
  const number1 = _.random(0, 100)
  const number2 = _.random(0, 100)
  const numbers = `${number1} ${number2}`
  const correctAnswer = gcd(number1, number2).toString()
  return [numbers, correctAnswer]
}

const game = () => {
  commonLogic(information, localLogic)
}
