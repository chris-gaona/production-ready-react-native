import { runSaga } from 'redux-saga'
import { initialState as currenciesInitialState } from '../../reducers/currencies'
import { initialState as networkInitialState } from '../../reducers/network'
import { fetchLatestConversionRates } from '../sagas'

beforeEach(() => {
  // resetting fetch api between tests
  fetch.resetMocks()
})

it('should set the conversion result on a successful response', async () => {
  const expectedResult = { base: 'USD', date: '2018-07-19', rates: { AUD: 1.5543 } }
  fetch.mockResponseOnce(JSON.stringify(expectedResult))

  const dispatched = []
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => ({ currencies: currenciesInitialState, network: networkInitialState }),
    },
    fetchLatestConversionRates,
    { currency: 'USD' },
  ).done

  expect(dispatched).toEqual([{ type: 'CONVERSION_RESULT', result: expectedResult }])
  expect(fetch).toHaveBeenCalled()
})
