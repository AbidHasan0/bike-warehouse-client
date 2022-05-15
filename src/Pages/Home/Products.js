import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';

const Products = () => {
   const [products] = useProducts();
   return (
      <div>
         <h1 className='text-center text-primary text-xl my-3 font-bold'>Our Products</h1>
         <div className='row g-5 my-4 container mx-auto '>
            {
               products.slice(0, 6).map(product => <Product
                  key={product._id}
                  product={product}
               ></Product>)
            }
         </div>
      </div>
   );
};

export default Products;