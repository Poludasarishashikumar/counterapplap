import { useDispatch } from 'react-redux';
import axios from 'axios';
import classes from './Authentication.module.css';
import { authActions,signUpActions } from '../store/index';
import { useState } from 'react';

const Authentication = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [signupForm,setSignUp]=useState(false);
  const dispatch = useDispatch();
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
  const signUp=async ()=>{
//     const det=[
//       {
//         email:email,
//         password:password
//       }
//     ];
// const response=await fetch('https://login-4da16-default-rtdb.firebaseio.com',{
//   method:'POST',
//   body:JSON.stringify(det),
//   headers:{
//     'Content-Type':'application/json'
//   }
// })
// // .then((response)=>{
// //   console.log(response.data);
// // })
// console.log(response.json());
//     return;
    
    dispatch(signUpActions.signUp({email,password}));
    setSignUp(false);
    setEmail('');
    setPassword('');
  };
  // const handler=signupForm?loginHandler:signUpHandler;
const btnTxt=signupForm?'Submit':'Sign Up';
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
          {!signupForm &&<button onClick={loginHandler}>Login</button>}
          {!signupForm &&<button onClick={signUpHandler}>{btnTxt}</button>}
          {signupForm &&<button onClick={signUp}>{btnTxt}</button>}
        </form>
      </section>
    </main>
  );
};

export default Authentication;
