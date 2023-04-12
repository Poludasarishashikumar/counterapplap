import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import classes from './Authentication.module.css';
import { authActions,signUpActions } from '../store/index';
import { useCallback, useEffect, useState } from 'react';
import Signup from './Signup';

const Authentication = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [signupForm,setSignUp]=useState(false);
  const dispatch = useDispatch();
  console.log(isAuth);
  // useEffect(()=>{
  //   setSignUp(isAuth);
  // },[])
 const emailHandler=(event)=>{
  setEmail(event.target.value);
 }
 const passwordHandler=(event)=>{
  setPassword(event.target.value);
 }
  const loginHandler = (event) => {
    // event.preventDefault();

    dispatch(authActions.login({password,email}));
  };
  const signUpHandler=()=>{
    setSignUp(true);
    
  }
  const det={
    email:email,
    password:password
  };
  const simplHandler=useCallback(async (event)=>{
     event.preventDefault();
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
console.log(localStorage.getItem('token'));
// .then(response => {
//   const token  =  response.data.token;
  // localStorage.setItem("token",JSON.stringify(data));


// })
//   .catch(err => console.log(err));
    
  });
  const signUp=async (event)=>{
    event.preventDefault();
    const det=[
      {
        email:email,
        password:password
      }
    ];
const response=await fetch('https://login-4da16-default-rtdb.firebaseio.com/login.json',{
  method:'POST',
  body:JSON.stringify(det),
  headers:{
    'Content-Type':'application/json'
  }
});
const data=await response.json();
console.log(data.name);
const token=data.name;
// .then(response => {
//   const token  =  response.data.token;
  // localStorage.setItem("token",JSON.stringify(data.name));
// // .then((response)=>{
// //   console.log(response.data);
// // })
// console.log(response.json());
//     return;
    
    dispatch(signUpActions.signUp({email,password,token}));
    setSignUp(false);
    
  };
  // const handler=signupForm?loginHandler:signUpHandler;
const btnTxt=signupForm?'Submit':'Sign Up';
// const handler=signupForm?signUp:signUpHandler;
  return (
    <>
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
          {!signupForm &&<button onClick={loginHandler}>Login</button>}
          {!signupForm &&<button onClick={signUpHandler}>{btnTxt}</button>}
          {signupForm &&<button onClick={signUp}>{btnTxt}</button>}
          <button onClick={simplHandler}>siple</button>
        </form>
      </section>
    </main>
    {/* <section>
      <Signup/>
    </section> */}
    </>
  );
};

export default Authentication;
