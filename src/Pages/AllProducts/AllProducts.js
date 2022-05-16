import React from 'react';
import AllProduct from '../AllProduct/AllProduct';
import useProducts from '../hooks/useProducts';

const AllProducts = () => {
   const [products] = useProducts();
   return (
      <div className='row g-5 my-4 container mx-auto'>
         <h2 className='text-center text-primary'>Our All Products</h2>
         {
            products.map(product => <AllProduct
               key={product._id}
               product={product}
            ></AllProduct>)
         }
      </div>
   );
};

export default AllProducts;