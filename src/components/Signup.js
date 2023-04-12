import { useDispatch } from 'react-redux';
import axios from 'axios';
import classes from './Authentication.module.css';
import { authActions,signUpActions } from '../store/index';
import { useCallback, useState } from 'react';

const Signup = () => {
  const [email1,setEmail]=useState('');
  const [password1,setPassword]=useState('');
  
  const dispatch = useDispatch();
 const emailHandler=(event)=>{
  setEmail(event.target.value);
 }
 const passwordHandler=(event)=>{
  setPassword(event.target.value);
 }
//   const loginHandler = (event) => {
//     // event.preventDefault();

//     dispatch(authActions.login({password,email}));
//   };
//   const signUpHandler=()=>{
//     setSignUp(true);
    
//   }
  const simplHandler=useCallback(async ()=>{
      const det={
        email:email1,
        password:password1
      };
    
    // localStorage.setItem("token",JSON.stringify(det));
  //   axios.post('https://login-4da16-default-rtdb.firebaseio.com/login.json',det).then(response => {
  //     //get token from response
  //     const token  =  response.data.token;
  //    console.log(token);
  //     //set JWT token to local

  //     //set token to axios common header
  //     // setAuthToken(token);
  // })
  const res=await fetch('https://login-4da16-default-rtdb.firebaseio.com/login.json',{
  method:'POST',
  body:JSON.stringify(det),
  headers:{
    'Content-Type':'application/json'
  }
});
const data=await res.json();
console.log(data);
// .then(response => {
//   const token  =  response.data.token;
//   localStorage.setItem("token",JSON.stringify(token));

// })
//   .catch(err => console.log(err));
    
  });
//   const signUp=async ()=>{
// //     const det=[
// //       {
// //         email:email,
// //         password:password
// //       }
// //     ];
// // const response=await fetch('https://login-4da16-default-rtdb.firebaseio.com',{
// //   method:'POST',
// //   body:JSON.stringify(det),
// //   headers:{
// //     'Content-Type':'application/json'
// //   }
// // })
// // // .then((response)=>{
// // //   console.log(response.data);
// // // })
// // console.log(response.json());
// //     return;
    
//     dispatch(signUpActions.signUp({email,password}));
//     setSignUp(false);
//     setEmail('');
//     setPassword('');
//   };
  // const handler=signupForm?loginHandler:signUpHandler;

// const handler=signupForm?signUp:signUpHandler;
  return (
    <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={emailHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={passwordHandler}/>
          </div>
          
          <button onClick={simplHandler}>Submit</button>
         
        </form>
      </section>
    </main>
  );
};

export default Signup;
