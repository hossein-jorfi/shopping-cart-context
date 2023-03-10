import React, { createContext, useEffect, useState } from 'react';

// API
import { getProducts } from '../services/api';

// Context
export const ProductsContext = createContext()

const ProductContextProvider = props => {

     const [products, setProducts] = useState([])

     useEffect(() => {
          const fetchAPI = async () => {
               setProducts(await getProducts())
          }

          fetchAPI()
     }, [])


     return (
          <ProductsContext.Provider value={products}>
               {props.children}
          </ProductsContext.Provider>
     );
};

export default ProductContextProvider;