import { expect, test } from 'bun:test'
import StreamDecoder from './index'

test('decoding array', () => {
  const decoder = new StreamDecoder()
  decoder.internalObj = {
    points_of_interest: [
      {
        name: "Golden Gate Bridge",
        short_description: "An iconic suspension bridge and a famous landmark of San Francisco."
      }
    ]
  }
  const expected = {
    points_of_interest: [
      {
        name: "Golden Gate Bridge",
        short_description: "An iconic suspension bridge and a famous landmark of San Francisco.",
        category: ['']
      }
    ]
  }
  const encoded = '!@#$12ka@a3sll_START[{"path":"points_of_interest.[0].category.[0]","type":"string","delta":""}]!@#$12ka@a3sll_END'

  const decoded = decoder.decode(encoded)
  expect(typeof decoded?.points_of_interest[0]).toBe('object')
  expect(decoded).toEqual(expected)
})
