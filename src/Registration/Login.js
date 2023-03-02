import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';
import { NavLink } from 'react-router-dom';
 const LoginSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email').required('Required'),
     password:Yup.string()
     .required('Required'),
 });
 export const Login = (props) => (
   <div className='signup'>
     <h1>Sign In</h1>
     <Formik
       initialValues={{
         email: '',
         password: '',
       }}
       validationSchema={LoginSchema}
       onSubmit={values => {
         console.log(values);
         axios.post( "http://localhost:5000/api/login",{
            email:values.email,
            password:values.password
        })
        .then(result=>{
            console.log("login successfull")
        })
        .catch(error=>{
            console.log(error)
            console.log("invalid email")
        })
       }}
     >
       {({ errors, touched }) => (
         <Form>
           EMAIL:
           <Field name="email" type="email" placeholder='Enter Email'/>
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
           PASSWORD:
           <Field name="password" type="password" placeholder='Enter Password'/>
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
           <button type="submit" 
        >Submit</button>
           <p>By joining I agree to receive emails from LEGALAND.</p>
           <span>Not a member ? <NavLink to='/signup'>Sign up</NavLink></span>
         </Form>
       )}
     </Formik>
   </div>
 );
 export default Login