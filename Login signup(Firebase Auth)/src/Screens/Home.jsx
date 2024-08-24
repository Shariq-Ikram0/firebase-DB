import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { Database } from '../config/firebase';
import { Password } from '@mui/icons-material';
import { deleteUser } from 'firebase/auth';

const Home = () => {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
const[userData,setUserData]=useState([])
const addData = async()=>{
  
try {
  console.log(name,email,password);

  let obj = {
    name,
    email,
    password,
    
  };


  const docRef = await addDoc(collection(Database, "users"),obj);
  console.log("docref data ", docRef);
} catch (error) {
  console.error("Error adding document: ", error);
}}

useEffect(()=>{getData()},[])
const getData = async()=>{
  try {
    const arr = [];
      const getData =await getDocs(collection(Database, "users"));
      getData.forEach((doc) => {
        arr.push({...doc.data(),id:doc.id});
      });
    setUserData(arr);
  } catch (error) {
    console.log(error)
  }
}

const deleteData= async (id)=>{
  try {
    const deleteUer = await deleteDoc(doc(Database, "users",id)); 
    console.log(deleteUer)
  } catch (error) { 
    console.log(error)
    
  }
}


  return (
    <div>
      <h1>welcome to home</h1><br />
       
      <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='name'/><br />
      <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='email'/><br />
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password"  placeholder='password'/><br />
      <button  onClick={addData}>Add Data</button>
      {
        userData.map((e,i)=>{
          return(
            <div key={i}>
              <h1>name:{e.name}
                <button>edit</button>
                <button onClick={()=>{deleteData(e.id)}}>delete</button>
              </h1>
              <h1>email:{e.email}
              <button>edit</button>
              <button onClick={()=>{deleteData(e.id)}}>delete</button>
              </h1>
              
              </div>
          )
        })
      }
    </div>
  )
}

export default Home