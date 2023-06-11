import { useEffect, useState } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';


function TODOComponent(){

    const initialValues = {
        email: '',
        password: '',
      };
      
      

      const validateEmail=(value)=>{
        let errorMassage='';
        if(!value){
            errorMassage='Email is Required';
        }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(value)){
            errorMassage='Invalid Email Address,Email must be like xxx@xxxx.com'
        }
        return errorMassage
      }
      const validatePassword=(value)=>{
        let errorMassage='';

        if(!value){
            errorMassage='Password is Required';
        }else if(value.length <8){
            errorMassage='Password should be at least 8 characters long'
        }
        return errorMassage
      }
      
      const handleSubmit = (values) => {

        console.log(values);
      };
    
      
return(
            <>
            <div className="container" style={{padding:"40px",width:"500px"}}>
            <div class="tab-content">
            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >
                {({ isValid, dirty }) => (
                <Form>
                <div class="form-outline mb-4">
                <label class="form-label" >Email </label>
                    <Field type="email"  class="form-control" name="email" validate={validateEmail} />
                    <ErrorMessage name="email" component="div" className="text-danger"/>
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" >Password</label>
                    <Field type="password"  class="form-control" name="password" validate={validatePassword}/>
                    <ErrorMessage name="password" component="div" className="text-danger" />

                </div>
                <button type="submit" className="btn btn-primary " style={{width:"420px",textAlign:"center"}}
                disabled={!isValid || !dirty}>Login</button>

               
                </Form>
                )}
                </Formik>
            </div>
            </div>
            </div>
            </>
    );
}
export default TODOComponent;