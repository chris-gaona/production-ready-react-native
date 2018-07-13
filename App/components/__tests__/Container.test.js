import React from 'react'
import renderer from 'react-test-renderer'

import { Container, styles } from '../Container'

it('should export a styles object', () => {
  expect(typeof styles).toBe('object')
})

it('should render without children', () => {
  const rendered = renderer.create(<Container />).toJSON()
  console.log(rendered)
  expect(rendered).toBeTruthy()
})
