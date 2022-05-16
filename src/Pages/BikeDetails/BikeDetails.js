import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DeliveredBike from '../DeliveredBike/DeliveredBike';

const BikeDetails = () => {
   const { bikesId } = useParams();
   const [bike, setBike] = useState({});
   useEffect(() => {
      const url = `https://bikewarehouse.herokuapp.com/bikeDetails/${bikesId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setBike(data))

   }, [bikesId]);

   const handleUpdateProducts = event => {
      event.preventDefault();

      const quantity = parseInt(event.target.quantity.value);
      // const newQuantity = (quantity + parseInt(product.quantity))
      console.log(quantity);

      fetch(`https://bikewarehouse.herokuapp.com/bikeDetails/${bikesId}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({ quantity })
      })
         .then(res => res.json())
         .then(result => {
            console.log(result);
            alert("Please reload to see updated quantity");
            event.target.reset();
         })
   }

   return (
      <div>
         <div className='text-center'>
            <form className='d-flex flex-column my-3' onSubmit={handleUpdateProducts}>
               <input className='w-50 mx-auto my-2 text-center border-1' placeholder='How much quantity you want to add?' type="number" name="quantity" id="" />
               <input className='w-25 mx-auto btn btn-primary' type="submit" value="Add Quantity" />
            </form>
         </div>
         <h1 className='text-center text-primary my-3'>Bike Name : {bike.name}</h1>
         <Card className='mx-auto my-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bike.img} />
            <Card.Body>
               <Card.Title>{bike.name}</Card.Title>
               <h6>Price : ${bike.price}</h6>
               <h3>Quantity : {bike.quantity}</h3>
               <h6>Supplier : {bike.supplier}</h6>
               <Card.Text>
                  {bike.description}
               </Card.Text>
               <DeliveredBike></DeliveredBike>
            </Card.Body>
         </Card>
      </div>
   );
};

export default BikeDetails;