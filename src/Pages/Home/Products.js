import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      const url = 'products.json';
      fetch(url)
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [])
   return (
      <div>
         <h1 className='text-center text-primary text-xl my-3 font-bold'>Our Products</h1>
         <div className='row g-5 my-4 container mx-auto '>
            {
               products.slice(0, 6).map(product => <Product
                  key={product.id}
                  product={product}
               ></Product>)
            }
         </div>
      </div>
   );
};

export default Products;