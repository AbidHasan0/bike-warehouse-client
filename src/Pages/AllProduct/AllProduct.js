import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({ product }) => {
   const navigate = useNavigate();
   const { _id, name, description, price, supplier, quantity, img } = product;

   const handleOrder = id => {
      navigate(`/bikeDetails/${id}`);
   }

   return (
      <div className='col-lg-4 col-sm-12 col-md-6 '>
         <Card className='border border- text-center' style={{ height: '100%' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
               <Card.Title>Name :{name}</Card.Title>
               <h6>Price :${price}</h6>
               <h6>Quantity :{quantity}</h6>
               <h6>Supplier Name : {supplier}</h6>
               <Card.Text>Detaile :{description}</Card.Text>
               <Button onClick={() => handleOrder(_id)} variant="primary">Order</Button>
            </Card.Body>
         </Card>
      </div>

   );
};

export default AllProduct;