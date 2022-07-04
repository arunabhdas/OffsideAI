import { render } from '@redwoodjs/testing/web'

import PropertyPage from './PropertyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PropertyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PropertyPage />)
    }).not.toThrow()
  })
})
