import { useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ManageBikes = () => {
   const navigate = useNavigate();
   const [bikes, setBikes] = useProducts();
   const handleAddBikeBtn = () => {
      navigate('/addbike');
   }
   const handleRemoveBtn = id => {
      const confirmation = window.confirm('Are you sure?');
      if (confirmation) {
         const url = `https://bikewarehouse.herokuapp.com/bikeDetails/${id}`;
         fetch(url, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               const remaining = bikes.filter(bike => bike._id !== id)
               setBikes(remaining)
               console.log(data)
            });

      }
   }


   return (
      <div>
         <h1 className='text-center text-dark my-3'>Manage your products</h1>

         {
            bikes.map(bike => <div key={bike._id}>
               <div>

                  <div className='d-flex justify-content-around align-items-center border my-3 '>
                     <div className='d-flex justify-content-around align-items-center'>
                        <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={bike.img} alt="" />
                        <p className='ms-2'>{bike.name}</p>
                     </div>
                     <div className='d-flex justify-content-center'>
                        <button onClick={() => handleRemoveBtn(bike._id)} className='btn btn-primary rounded'>Remove</button>
                     </div>
                  </div>
               </div>

            </div>)
         }
         <button onClick={handleAddBikeBtn} className='btn btn-primary d-block w-25 mx-auto'>Add Bike</button>
      </div>


   );
};

export default ManageBikes;