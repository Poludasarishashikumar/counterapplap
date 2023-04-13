import { Children, Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Authentication from './components/Authentication';
import UserProfile from './components/UserProfile';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/Root';

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
    {index:true ,path:'/',element:<Authentication/>},
    {path:'/user',element:<UserProfile/>},
    {path:'/counter',element:<Counter/>},
    ],
  }
  

]);



function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  // return (
    // <Fragment>
    //   <Header />
    //   {!isAuth && <Authentication />}
    //   {isAuth && <UserProfile />}
    //  {isAuth && <Counter />}
    // </Fragment>
    return <RouterProvider router={router}/>;
  // );
}

export default App;
