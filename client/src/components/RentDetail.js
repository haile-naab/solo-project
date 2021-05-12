import  {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, } from '@reach/router';

const RentDetail = (props) => {
    const [rents, setRents] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/rent/' + props.id)
        .then((res) => {
            console.log(res.data);
            setRents(res.data);
        })
        .catch((err) =>{
            console.log(err);
        });
    }, []);

    const deleteRent = ((RentId)=>{
        axios.delete('http://localhost:8000/api/rent/' + RentId)
        .then ((res)=>{
            console.log(res.data);
            navigate('/');  

                let filteredRentArray = rents.filter((oneRent) => {
                    return oneRent._id !== RentId;
                })
                setRents(filteredRentArray);
                
        })
        .catch((err)=>{
            console.log(err);
        })
    })





    return (

        <div>

<h1 >  Detail of {rents.manfacturer}  </h1>

{/* <h3>   Detail about : {pets.petname} </h3> */}

<button className="bttn"  onClick={ () => deleteRent(rents._id)} > Delete :{rents.manfacturer} </button>
        <div  className="detailhandler">
             <h1 >  Pet Shelter  </h1>



           
           <h3> Manufacturer:  <span className='detailchi'>  { rents.manfacturer}   </span>  </h3> 
           <h3> Model: <span className='detailchi'> { rents.model  }     </span>      </h3>   
           <h3> Year:     <span className='detailchi'>    { rents.year}  </span> <br/> </h3> 
           <h3> Image:     <span className='detailchi'>    { rents.image}  </span> <br/> </h3> 
           <h3> State:     <span className='detailchi'>    { rents.rentstate}  </span> <br/>   </h3>            
                            
           
           
           
           
           
        </div>
        </div>
    )
}
export default  RentDetail;