import { getInitialConversion, changeCurrencyAmount } from '../currencies'

describe('getInitialConversion', () => {
  it('should create a properly formatted action', () => {
    const expected = { type: 'GET_INITIAL_CONVERSION' }
    const actual = getInitialConversion()
    expect(actual).toEqual(expected)
  })
})

describe('changeCurrencyAmount', () => {
  it('should create an action with an amount of 100', () => {
    const expected = { type: 'CHANGE_CURRENCY_AMOUNT', amount: 100 }
    const actual = changeCurrencyAmount(100)
    expect(actual).toEqual(expected)
  })

  it('should convert a string value to a float', () => {
    const expected = { type: 'CHANGE_CURRENCY_AMOUNT', amount: 100 }
    const actual = changeCurrencyAmount('100')
    expect(actual).toEqual(expected)
  })
})
