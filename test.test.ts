import { expect, test } from 'bun:test'
import StreamDecoder from '.'

test('decoding array', () => {
  const decoder = new StreamDecoder()
  decoder.internalObj = {
    "points_of_interest": [
      {
        "name": "Golden Gate Bridge",
        "short_description": "An iconic suspension bridge and a famous landmark of San Francisco."
      }
    ]
  }
  const encoded = '!@#$12ka@a3sll_START[{"path":"points_of_interest.[0].category.[0]","type":"string","delta":""}]!@#$12ka@a3sll_END'

  const decoded = decoder.decode(encoded)
  console.log(decoded);
  
  expect(typeof decoded.points_of_interest[0]).toBe('object')
})
