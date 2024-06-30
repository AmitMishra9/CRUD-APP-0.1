import React from 'react'
import {Button ,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Empolyees  from './Empolyees';
import {Link,useNavigate} from 'react-router-dom'

export default function Home() {
 
    let naviaget= useNavigate(); 
    const handelDelet =(id)=>{
         var  index=Empolyees.map(function(e){
             return e.id;
         }).indexOf(id);

         Empolyees.splice(index,1);
         naviaget('/');
    }

 const handelEdit=(id,name,age)=>{
   localStorage.setItem('Name',name);
   localStorage.setItem('Age',age);
   localStorage.setItem('Id',id);



      
 }   


  return (
    <>
      <div style={{margin:"10rem"}}>
           <Table striped bordered hover size="sm">
               <thead>
                  <tr>
                    <th>Name</th>
                    <th>age</th>
                    <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                   {
                     Empolyees && Empolyees.length > 0 ? Empolyees.map((item)=>{
                          return(
                               <tr>
                                
                                <td>{item.Name}</td>
                                

                                 <td>{item.Age}</td>
                                  <td>
                                  <Link to={'/edit'}>
                                    <Button onClick={()=>handelEdit(item.id,item.Name,item.Age)}>Edit</Button>
                                    </Link>  
                                    &nbsp;
                                    
                                    <Button onClick={()=>handelDelet(item.id)}>Delete</Button>

                                 
                                    </td>
                               </tr>  
                          )
                     })
                     : 
                     "No Data is available"
                   }
               </tbody>
           </Table> 
           <Link to='/create' className='d-grid-2'>
               <Button size="lg">Create</Button>
           </Link>
      </div>   
    </>
  )
}
