import { random } from 'lodash'

export const shouldAccessCriticalArea = () => {
  return random(0, 1) === 1
}
