import React from 'react';
import { Carousel } from 'react-bootstrap';
import bike1 from '../../img/bike1.jpg';
import bike2 from '../../img/bike2.jpg';
import bike3 from '../../img/bike3.jpg';

const Banner = () => {
   return (
      <div>
         <Carousel fade>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={bike1}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>Welcome to bike warehouse</h3>
                  <p>A place to find your favourite bike.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={bike2}
                  alt="Second slide"
               />

               <Carousel.Caption>
                  <h3>Added your favourite bike.</h3>
                  <p>You can add bikes.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={bike3}
                  alt="Third slide"
               />

               <Carousel.Caption>
                  <h3>Manage your bike.</h3>
                  <p>Manage your favourite bike.</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   );
};

export default Banner;