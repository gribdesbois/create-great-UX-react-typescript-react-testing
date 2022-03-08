import React, { Reducer } from 'react'
import { render } from '@testing-library/react'
import { fetchReducer } from '.'
import {
  FetchActionType,
  State,
  Data,
  FetchAction,
  ProductType,
} from '../../types'

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

describe('when dispatch FETCH_ERROR action', () => {
  it('returns the isLoading as false with an error', () => {
    const action = {
      type: FetchActionType.FETCH_ERROR,
    }

    expect(fetchReducer(initialState, action)).toEqual({
      isLoading: false,
      hasError: true,
      data: initialData,
    })
  })
})

describe('when dispatch FETCH_SUCCESS action', () => {
  it('return the API data', () => {
    const product: ProductType = {
      name: 'iphone',
      price: 3500,
      imageUrl: 'image-url.png',
      description: 'Apple mobile phone',
      isShippingFree: true,
      discount: 0,
    }

    const action = {
      type: FetchActionType.FETCH_SUCCESS,
      payload: [product],
    }

    expect(fetchReducer(initialState, action)).toEqual({
      isLoading: false,
      hasError: false,
      data: initialData.push(product),
    })
  })
})
