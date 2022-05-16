import React from 'react';
import Banner from './Banner';
import Products from './Products';
import thumb from '../../img/thumb.jpg';




const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Products></Products>
         <div className='container'>
            <div className='d-flex  justify-content-center align-items-center border p-3 rounded '>
               <div >
                  <img className='w-75' src={thumb} alt="" />
               </div>
               <div className='bg-dark text-white p-3 rounded'>
                  <h2 className='text-danger text-center my-2'>New Arrival</h2>
                  <p className='ms-3'>The updated bike features double disc brakes 276mm front and 220mm rear with Single Channel Anti-Lock Braking (ABS) for the front wheel. The Digital instrument cluster has been updated in accordance and now includes an ABS warning indicator. The bike retains its 160cc HET engine, which the company claims can achieve 59kmpl under strict test conditions.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;