import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
   const { name, description, price, supplier, quantity, img } = product;
   return (
      <div className='col-lg-4 col-sm-12 col-md-6 '>
         <Card className='border border-0' style={{ height: '100%' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
               <h6>${price}</h6>
               <h6>Quantity :{quantity}</h6>
               <h6>Supplier Name : {supplier}</h6>
               <Card.Text>{description}</Card.Text>

               <Button variant="primary">Order</Button>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Product;