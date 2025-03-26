import _ from 'lodash'
import { commonLogic } from '../index.js'
export { game }

const information = 'Answer "yes" if the number is even, otherwise answer "no".'
const localLogic = () => {
  const number = _.random(0, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [number, correctAnswer]
}

const game = () => {
  commonLogic(information, localLogic)
}
