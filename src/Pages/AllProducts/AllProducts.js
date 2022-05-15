import React from 'react';
import AllProduct from '../AllProduct/AllProduct';
import useProducts from '../hooks/useProducts';

const AllProducts = () => {
   const [products] = useProducts();
   return (
      <div className='row g-5 my-4 container mx-auto'>
         {
            products.map(product => <AllProduct
               key={product.id}
               product={product}
            ></AllProduct>)
         }
      </div>
   );
};

export default AllProducts;