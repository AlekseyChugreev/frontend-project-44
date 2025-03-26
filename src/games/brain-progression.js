import _ from 'lodash'
import { commonLogic } from '../index.js'
export { game }

const getProgression = () => {
  const progression = []
  let startNumber = _.random(0, 100)
  const addedNumber = _.random(2, 7)
  for (let i = 0; i < 10; i++) {
    const resultnumber = startNumber + addedNumber
    progression.push(resultnumber)
    startNumber = resultnumber
  }
  return progression
}

const information = 'What number is missing in the progression?'
const localLogic = () => {
  const progression = getProgression()
  const randomIndex = _.random(0, progression.length - 1)
  const correctAnswer = progression[randomIndex].toString()
  progression[randomIndex] = '..'
  const progressionStr = progression.join(' ')
  return [progressionStr, correctAnswer]
}

const game = () => {
  commonLogic(information, localLogic)
}
