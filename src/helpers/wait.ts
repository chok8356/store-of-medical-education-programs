import { getRandomInteger } from '@/helpers/getRandomInteger'

export const wait = (ms: number, value: any = undefined) => new Promise((resolve) => {
  setTimeout(() => resolve(value), ms)
})

export const waitingForServerResponse = (value: any = undefined) => {
  return wait(getRandomInteger(50, 500), value)
}
