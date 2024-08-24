import { Avatar, Button, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import Checkboxes from '../Components/Checkbox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
// import { auth } from '../config/firebase';

const Signup = () => {
 const [name , setName]=useState("");
 const [userName , setUserName]=useState("");
 const [email , setEmail]=useState("");
 const [password,setPassword]=useState("");

 const navigate = useNavigate();

const handleSignup = ()=>{

    console.log("name",name);
    console.log("UserName",userName);
    console.log("email",email);
    console.log("password",password);

    let userObj={
        name,
        email,
        userName,
    };

    
    createUserWithEmailAndPassword(auth,email,password)
    .then((res) => {
       console.log("userCredential",res);
       navigate("/");
   
    })
    .catch((error) => {
        console.log(error);
    });
}



  return (
    <form>
      <Container maxWidth="md">
        <Grid container justifyContent={'center'} sx={{mt:5 }}>
            <Grid item  xs={12} md={6} > 

                <Paper elevation={10}  sx={{ padding:"20px"}}>
                    <Grid align="center"> 
                        <Avatar sx={{ bgcolor: 'primary.main' }}><HowToRegIcon/></Avatar>
                    <Typography variant='h4' sx={{ fontFamily: 'Georgia, serif', fontSize: '24px',mb:3 }}>
                        SignUp
                    </Typography>
                    </Grid>
                    <TextField onChange={(e)=>setName(e.target.value)} label="Name" fullWidth sx={{mb:"18px" }} />
                    <TextField onChange={(e)=>setUserName(e.target.value)} label="User Name" fullWidth sx={{mb:"18px" }} />    
                    <TextField onChange={(e)=>setEmail(e.target.value)} label="Email" fullWidth sx={{mb:"18px" }} />
                    <TextField onChange={(e)=>setPassword(e.target.value)} label="Password" type="password" fullWidth sx={{mb:"18px"}} />
                    <Checkboxes checkline={"I accept all terms and condition"}/>

                    <Button onClick={handleSignup} variant="contained"  sx={{ width: '100%', height: '40px', borderRadius:"10px",mb:1, mt:2}}>Signup</Button>
                  
                    <Grid align='center'>
                    <Typography sx={{fontSize:14}}>Already have an account?
                        <Link sx={{fontWeight:"bold" , fontSize:15}} href="/"> Login</Link>
                    </Typography> 
                    </Grid>
                </Paper>
                 
            </Grid>
            

        </Grid>
    </Container>
    </form>
  )
}

export default Signup