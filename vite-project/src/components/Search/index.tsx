import React, { useState, useEffect } from 'react'
import { getProducts } from '../../api'
import { useProductFetchAPI } from '../../hooks/useProductFetchAPI'
import { State } from '../../types'

const Search = () => {
  const [products, setProducts] = useState([])
  /* const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false) */
  const { isLoading, hasError, data }: State = useProductFetchAPI()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(false)
        const fetchedProducts = await getProducts()
        setIsLoading(false)
        setProducts(fetchedProducts)
      } catch (err) {
        setIsLoading(false)
        setHasError(true)
      }
    }
    fetchProducts()
  }, [])
}

export default Search
