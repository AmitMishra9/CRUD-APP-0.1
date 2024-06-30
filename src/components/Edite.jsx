import React  from 'react'
import { Button ,Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Empolyees from './Empolyees';
import { v4 as uuidv4 } from 'uuid';
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Edite(){
      const [name,setName]=useState("");
      const [age,setAge]=useState("");
      const [id,setId]= useState("");

    let naviget =useNavigate(); 

    var index =Empolyees.map(function(e){
          return e.id
     }).indexOf(id);


   const handelSubmit=(e)=>{
       e.preventDefault();

       let a= Empolyees[index];
       a.Name=name;
      a.Age=age;

       naviget("/");


   }

   useEffect(()=>{
       setName(localStorage.getItem('Name'))
       setAge(localStorage.getItem('Age'))
       setId(localStorage.getItem('Id'))
   },[])

    
      return(
          <>
          <Form className="d-grid gap-1"  style={{margin:"15rem", width:"50%"}}>
          <h1 className='text-center'>Edit-Data</h1> 
          
        <Form.Group className='mb-3' controlId='formName'>
              
             <Form.Control  type="text"  placeholder="Ente-Name" value={name}  required onChange={(e)=> setName(e.target.value)}>
                  
             </Form.Control>
          
          </Form.Group>
  
          <Form.Group className='mb-3' controlId='formName'>
              
             <Form.Control  type="text"  placeholder='Ente age'  value={age}  required onChange={(e)=> setAge(e.target.value)}>
                  
             </Form.Control>
          
          </Form.Group>
            <Button onClick={(e)=> handelSubmit(e)} type="Submit">Upade</Button>
        </Form>  

          </>
      )


     
}

export default Edite;