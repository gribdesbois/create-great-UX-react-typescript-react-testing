import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { useProductFetchAPI } from '.'
import { Data } from '../../types'
import { renderHook, RenderHookResult } from '@testing-library/react-hooks/pure'

const mock: MockAdapter = new MockAdapter(axios)
const url: string = '/search'
const initialData: Data = []

describe('when fetching data', () => {
  it('handles error on timed-out api requests', () => {
    mock.onGet(url).timeout()

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductFetchAPI(/* url, initialData */)
    )
  })
})
