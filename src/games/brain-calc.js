import _ from 'lodash'
import { commonLogic } from '../index.js'
export { game }

const information = 'What is the result of the expression?'
const localLogic = () => {
  const signsArr = ['+', '-', '*']
  const expression = `${_.random(0, 10)} ${_.sample(signsArr)} ${_.random(0, 10)}`
  const correctAnswer = eval(expression).toString()
  return [expression, correctAnswer]
}

const game = () => {
  commonLogic(information, localLogic)
}
