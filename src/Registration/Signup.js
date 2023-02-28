import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';
import { NavLink } from 'react-router-dom';
 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     email: Yup.string().email('Invalid email').required('Required'),
     password:Yup.string()
     .min(2, 'Too Short!')
     .max(10, 'Too Long!')
     .required('Required'),
 });
 export const ValidationSchemaExample = () => (
   <div className='signup'>
     <h1>Sign up</h1>
     <Formik
       initialValues={{
         name: '',
         email: '',
         password: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         console.log(values);
         axios.post( "http://localhost:5000/api/register",{
            name:values.name,
            email:values.email,
            password:values.password
        })
        .then(result=>{
            console.log(result)
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
            NAME:
           <Field name="name" placeholder='Enter Name'/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           EMAIL:
           <Field name="email" type="email" placeholder='Enter Email'/>
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
           PASSWORD:
           <Field name="password" type="password" placeholder='Enter Password'/>
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
           <button type="submit">Submit</button>
           <p>By joining I agree to receive emails from LEGALAND.</p>
           <span>Already a member ?<NavLink to='/signin'>Sign In</NavLink></span>
         </Form>
       )}
     </Formik>
   </div>
 );
 export default ValidationSchemaExample