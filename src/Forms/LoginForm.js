import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => (
    <div>
        {/* The following form code was obtained from Formik official documentation on 
        https://jaredpalmer.com/formik/docs/overview#installation
        in order to understand how Formik form handler works */}
        <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
         else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
          }
           else if ((values.password.length<8)
          ) {
            errors.password = 'Password must have at least 8 letters';
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
          <Form  style={{}}>
            <Field type="email" placeholder="Email" name="email" style={{width:300}}/>
            <br/>
            <ErrorMessage name="email" component="span" style={{color:"red"}} />
            <br/>
            <Field type="password" placeholder="Password"name="password" style={{width:300, marginTop:8}}/>
            <br/>
            <ErrorMessage name="password" component="span" style={{color:"red"}} />
            <br/>
            <button type="submit" disabled={isSubmitting} style={{ margin:'10px auto 0px auto', color:"white", backgroundColor:"grey", width:100}} >
              Login
            </button>
          </Form>
      )}
    </Formik>
    </div>
);

export default LoginForm;