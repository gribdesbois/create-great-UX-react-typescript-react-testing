import React, { useState, useEffect } from 'react'
import { getProducts } from '../../api'

const Search = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

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
