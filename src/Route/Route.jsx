import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';
import Classes from '../pages/Classes/Classes';
import PrivateRoute from './PrivateRoute';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers/ManageUsers';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses/ManageClasses';
import AdminRoute from './AdminRoute';
import AddClass from '../pages/Dashboard/Instructor/AddClass/AddClass';
import InstructorRoute from './InstructorRoute';
import MyClass from '../pages/Dashboard/Instructor/MyClass/MyClass';
import Payment from '../pages/Dashboard/Payment/Payment';
import Error from '../pages/shared/error';
import MyEnrolled from '../pages/Dashboard/User/MyEnrolled/MyEnrolled';
import PaymentHistory from '../pages/Dashboard/User/PaymentHistory/PaymentHistory';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error> ,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'manageclasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'addclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myclasses',
        element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'myenrolled',
        element: <MyEnrolled></MyEnrolled>
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      }
    ]
  }
]);