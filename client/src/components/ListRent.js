import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link} from '@reach/router';

const RentList = (props) => {
    const [listRents, setListRent]= useState([]);

    // if we want our list to pop up we have to use useEffect
    useEffect(()=>{
        axios.get('http://localhost:8000/api/rent')
        .then((res) =>{
                    console.log(res.data);
                    setListRent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
    },[])


    // const deleteAuthor = ((AuthorId)=>{
    //     axios.delete('http://localhost:8000/api/author/' + AuthorId)
    //     .then ((res)=>{
    //         console.log(res.data);  
            
            

    //             let filteredAuthorArray = listAuthor.filter((oneAuthor) => {
    //                 return oneAuthor._id !== AuthorId;
    //             })
    //             setListAuthor(filteredAuthorArray);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // })
    
    // const getListAuthor = () =>{
    //     axios.get('http://localhost:8000/api/author')
    //     .then((res) =>{
    //         console.log(res.data);
    //         setListAuthor(res.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }
    return (
        <div>
            
            <h1 >  List of Cars  </h1>

            

            <Link  className='linkla b' to={`/rent`}> Create new  </Link>
            
            {/* <button onClick={getListAuthor}>List Product </button>  */}
           
             <table> 
                 <tr> <th> Cars </th>  <th>state </th>    <th> Actions </th> </tr>
                  
                     
            {  
               listRents.map((rent, index) => (
                
                <tr key={index}> 
                    
                    <td>      <h4>     <Link className='linkla' to= {`/rent/${rent._id}`} > {rent.model} </Link> </h4>    </td>

                 <td>   <h4> {rent.rentstate} </h4>     </td>
        
                    {/* <button onClick={ () => deleteAuthor(author._id) }> Delete </button> */}


                    <td>   
                        
                    
                    <h4 className='cliker' > <Link className='linkla' to= {`/rent/edit/${rent._id}`} >   Update  </Link> </h4> 
                
                     </td>
                     
                    </tr> 

               ) )
            
              
               
            }
            
            </table>       
                    
        </div>    
           
       
    )
}
export default RentList;
