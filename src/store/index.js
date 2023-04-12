import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const tok=(localStorage.getItem('token')==='')
const initialAuthState = {
  isAuthenticated:!(tok) ,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state,action) {

      const cred=action.payload;
      
      console.log(cred.token);
      if(cred.password===localStorage.getItem('password') && cred.email===localStorage.getItem('email') && !(cred.token===''))
      {
        
      state.isAuthenticated = true;
      }
      else{
        
        alert("Not Valid");
        state.isAuthenticated=false;
      }
    },
    logout(state) {
      localStorage.setItem('token','');
      state.isAuthenticated = false;
    },
  },
});


const initialSignUpState={
  isSignUp:false
}
const signupSlice=createSlice({
  name:'signup',
  initialState:initialSignUpState,
  reducers:{
    signUp(state,action){
      
      const creds=action.payload;
      // console.log(creds)
      state.isSignUp=true;
      // localStorage.setItem('userDetails',JSON.stringify(creds));
      localStorage.setItem("token",JSON.stringify(creds.token));
      localStorage.setItem('email',creds.email);
      localStorage.setItem('password',creds.password);
      // state.isSignUp=true;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer ,signup:signupSlice.reducer},
});

export const signUpActions=signupSlice.actions;
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
