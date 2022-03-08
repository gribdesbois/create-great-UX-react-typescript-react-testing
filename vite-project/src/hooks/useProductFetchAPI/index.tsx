import { FetchActionType, State } from '../../types'
import { useEffect, useReducer } from 'react'
import { fetchReducer } from '../../reducers/fetchReducer.tsx'

export const useProductFetchAPI = (): State => {
  const initialState: State = {
    isLoading: false,
    hasError: false,
    data: fakeData,
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    const fetchAPI = async () => {
      dispatch({ type: FetchActionType.FETCH_INIT })

      try {
        const payload = await fetchProducts()

        dispatch({
          type: FetchActionType.FETCH_SUCCESS,
          payload,
        })
      } catch (err) {
        dispatch({ type: FetchActionType.FETCH_ERROR })
      }
    }

    fetchAPI()
  }, [])

  return state
}
