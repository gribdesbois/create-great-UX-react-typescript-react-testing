import React from 'react'
import { render } from '@testing-library/react'
import { fetchReducer } from '.'
import { FetchActionType, State, Data } from '../../types'

const initialData: Data = []
const initialState: State = {
  isLoading: false,
  hasError: false,
  data: initialData,
}

describe('when dispatch FETCH_INIT action', () => {
  it('returns the isLoading as true without any error', () => {
    const action = {
      type: FetchActionType.FETCH_INIT,
    }

    expect(fetchReducer(initialState, action)).toEqual({
      isLoading: true,
      hasError: false,
      data: initialData,
    })
  })
})
