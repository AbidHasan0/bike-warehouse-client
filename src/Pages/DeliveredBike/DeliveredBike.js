import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DeliveredBike = () => {
   const { bikesId } = useParams();
   const [bike, setBike] = useState({});
   useEffect(() => {
      const url = `https://bikewarehouse.herokuapp.com/bikeDetails/${bikesId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setBike(data))

   }, [bikesId]);

   const handleDeliverProduct = (event) => {
      const quantity = parseInt(bike.quantity) - 1;
      console.log(quantity);
      fetch(` http://localhost:5000/bikeDetails/${bikesId}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({ quantity })
      })
         .then(res => res.json())
         .then(result => {
            console.log(result)
            setBike(result)
         })


   }


   return (
      <div className='mx-auto container'>
         <button onClick={handleDeliverProduct} className='btn btn-primary'>Deliver Product</button>
      </div>
   );
};

export default DeliveredBike;