export enum FetchActionType {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}

export type ProductType = {
  name: string
  price: number
  imageUrl: string
  description: string
  isShippingFree: boolean
  discount: number
}

export type Data = ProductType[]

export type State = {
  isLoading: boolean
  hasError: boolean
  data: Data
}

export const initialData: Data = []
