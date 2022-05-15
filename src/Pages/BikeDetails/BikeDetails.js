import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BikeDetails = () => {
   const { bikesId } = useParams();
   const [bike, setBike] = useState({});
   useEffect(() => {
      const url = `https://bikewarehouse.herokuapp.com/bikeDetails/${bikesId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setBike(data))

   }, [bikesId])
   return (
      <div>
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
               <Button variant="primary">Delivery</Button>
            </Card.Body>
         </Card>
      </div>
   );
};

export default BikeDetails;