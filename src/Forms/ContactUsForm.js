import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactUsForm = () => (
    <div>
        {/* The following form code was obtained from Formik official documentation on 
        https://jaredpalmer.com/formik/docs/overview#installation
        in order to understand how Formik form handler works */}
        <Formik
      initialValues={{ email: '', name: '', topic: '', query: '' }}
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
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.topic) {
            errors.topic = 'Required';
        }
        if (!values.query) {
            errors.query = 'Required';
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
            <Field type="name" placeholder="Name" name="name" style={{width:300}}/>
            <br/>
            <ErrorMessage name="name" component="span" style={{color:"red"}} />
            <br/>
            <Field type="email" placeholder="Email" name="email" style={{width:300}}/>
            <br/>
            <ErrorMessage name="email" component="span" style={{color:"red"}} />
            <br/>
            <Field name="topic" as="select" placeholder="Topic of your query" style={{width:300}}>
                <option value="About shopping on GreenKart">About shopping on GreenKart</option>
                <option value="Previous purchase">Previous purchase</option>
                <option value="Bulk purchase">Bulk purchase</option>
            </Field>
            <br/>
            <br/>
            <Field type="query" as="textArea" rows="5" placeholder="Query" name="query" style={{width:300}}/>
            <br/>
            <ErrorMessage name="query" component="span" style={{color:"red"}} />
            <br/>
            <button type="submit" disabled={isSubmitting} style={{ margin:'10px auto 0px auto', color:"white", backgroundColor:"grey", width:100}} >
              Submit
            </button>
          </Form>
      )}
    </Formik>
    </div>
);

export default ContactUsForm;