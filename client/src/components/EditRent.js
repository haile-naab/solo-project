import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const EditRent = (props) => {
    //keep track of what is being typed via useState hook
    const [manfacturer, setManfacturer] = useState(""); 
    const [model, setModel] = useState(""); 
    const [year, setYear] = useState(""); 
    const [color, setColor] = useState(""); 
    const [image, setImage] = useState(""); 
    const [rentstate, setRentState] = useState(""); 

    const [ errs, setErrors ] = useState({});



    useEffect(()=>{
        axios.get('http://localhost:8000/api/rent/' + props.id )
        .then((res)=>{
            console.log(res.data);
            setManfacturer(res.data.manfacturer);
            setModel(res.data.model);
            setYear(res.data.year);
            setColor(res.data.color);
            setImage(res.data.image);
            setRentState(res.data.rentstate);
            
        })
        .catch((err)=> console.log(err))
        
        
        
    },[])
    
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.put('http://localhost:8000/api/rent', {
            manfacturer,
             model, 
             year, 
            color, 
            image, 
            rentstate, 
              
        })
            .then((res)=>{

            if(res.data.errors){
                console.log(res.data.errors); 
                setErrors(res.data.errors);
            } 
            else {
                console.log(res.data);
                //navigate('/default');
            }

                
            })
            .catch((err)=> {
                console.log(err);
                
            })
    }
    //onChange to update firstName and lastName
    return (
        <div className="wrapper">
        <form onSubmit={onSubmitHandler} > 


        <h1> Update Rental Car </h1> 
        {/* <h3>   Know a pet needing a home ?  </h3> */}

        {/* <p  > <Link to='api/pet'> back to home  </Link> </p>  */}

<div className='entrnal-w'>
        <div className="first-c">  <label>   Manfacturer </label> <br/>

        {
              errs. manfacturer ?
                <span className="error-text">{errs.manfacturer.message}</span>
                : null
            } <br/>
                <input type="text" value={manfacturer} onChange = {(e)=>setManfacturer(e.target.value)}/> <br/>

                <label> Model </label> <br/>

                {
              errs.model ?
                <span className="error-text">{errs.model.message}</span>
                : null
            } <br/>
                <input type="text" value={model} onChange = {(e)=>setModel(e.target.value)}/> <br/>

                <label> Year </label> <br/>


                {
              errs.year ?
                <span className="error-text">{errs.year.message}</span>
                : null
            } <br/>
                <input type="text" value={year} onChange = {(e)=>setYear(e.target.value)}/> <br/>
            
               </div>


               <div className="second-c"> 
               <label> Color </label> <br/> 
               {
              errs.color ?
                <span className="error-text">{errs.color.message}</span>
                : null
            } <br/>


                <input type="text" value={color} onChange = {(e)=>setColor(e.target.value)}/> <br/>

                <label> Image </label> <br/> 
                {
              errs.image ?
                <span className="error-text">{errs.image.message}</span>
                : null
            } <br/>


                <input type="text" value={image} onChange = {(e)=>setImage(e.target.value)}/> <br/>

                <label> State </label> <br/> 

                {
              errs.rentstate ?
                <span className="error-text">{errs.rentstate.message}</span>
                : null
            } <br/>
                <input type="text" value={rentstate} onChange = {(e)=>setRentState(e.target.value)}/> <br/>
                   
                   
                   
                   
                    </div>
         
             <br/>
            
            <button> Edit car </button>
            
            </div>

            
        </form>
        
        </div>
        
    )
}
export default EditRent ;
