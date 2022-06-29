import { render } from '@redwoodjs/testing/web'

import OffsidelayoutLayout from './OffsidelayoutLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OffsidelayoutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OffsidelayoutLayout />)
    }).not.toThrow()
  })
})
