import React  from 'react'
import { Button ,Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Empolyees from './Empolyees';
import { v4 as uuidv4 } from 'uuid';
import { Link,useNavigate} from 'react-router-dom';
import { useState } from 'react'
function Add() {
     
    const [name,setName]=useState();
    const [age,setAge]=useState();
     
      let naviget= useNavigate();

      const handelSubmit=(e)=>{
        
        e.preventDefault();

        const id= uuidv4();
        let uniqueId =id.slice(0,8);

        let a= name;
        let b= age;

        Empolyees.push({id:uniqueId, Name:a, Age:b});

        naviget("/");
      }
     
     return (
    <>
      <Form className="d-grid gap-1"  style={{margin:"15rem", width:"50%"}}>
        <h1 className='text-center'>Add Data</h1> 
        
      <Form.Group className='mb-3' controlId='formName'>
            
           <Form.Control  type="text"  placeholder="Ente-Name"  required onChange={(e)=> setName(e.target.value)}>
                
           </Form.Control>
        
        </Form.Group>

        <Form.Group className='mb-3' controlId='formName'>
            
           <Form.Control  type="text"  placeholder='Ente age'  required onChange={(e)=> setAge(e.target.value)}>
                
           </Form.Control>
        
        </Form.Group>
          <Button onClick={(e)=> handelSubmit(e)} type="Submit">Add Data</Button>
      </Form>  
    </>
  )
}

export default Add