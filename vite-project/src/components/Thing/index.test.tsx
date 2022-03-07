import React from 'react'
import { render } from '@testing-library/react'
import Thing from '.'

describe('Thing', () => {
  it('renders the correct text in the document', () => {
    const { getByText } = render(<Thing />)

    expect(getByText("I'm TK")).toBeInTheDocument()
  })
})
