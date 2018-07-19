import Enzyme from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

// override fetch api (mock it)
global.fetch = require('jest-fetch-mock')

Enzyme.configure({ adapter: new Adapter() })
