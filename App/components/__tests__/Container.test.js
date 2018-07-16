import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'

import { Container, styles } from '../Container'

it('should export a styles object', () => {
  expect(typeof styles).toBe('object')
})

it('should render without children', () => {
  const rendered = renderer.create(<Container />).toJSON()
  expect(rendered).toBeTruthy()
})

it('should render children props', () => {
  const rendered = renderer
    .create(<Container>
      <View />
            </Container>)
    .toJSON()
  // toMatchSnapshot creates a snapshot
  expect(rendered).toMatchSnapshot()
})

it('should use the specified backgroundColor if provided', () => {
  const rendered = renderer.create(<Container backgroundColor="red" />).toJSON()
  // toMatchSnapshot creates a snapshot
  expect(rendered).toMatchSnapshot()
})
