import {assert, expect} from 'chai'
import {high, wordValue} from '../src/wordHighScore'

const solutions = [
  ['man i need a taxi up to ubud', 'taxi'],
  ['what time are we climbing up the volcano', 'volcano'],
  ['take me to semynak', 'semynak'],
  ['massage yes massage yes massage', 'massage'],
  ['take two bintang and a dance please', 'bintang'],
  ['aa b', 'aa'],
  ['b aa', 'b'],
  ['bb d', 'bb'],
  ['d bb', 'd'],
  ['aaa b', 'aaa'],
]

describe('wordValue test', () => {
  it('works with test inputs', () => {
    expect(wordValue("abc")).to.equal(6)
  })
})

describe('Sample test', () => {
  it('works with test inputs', () => {
    solutions.forEach(([input, expected]) => {
      assert.strictEqual(high(input), expected)
    })
  })
})