import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class StudentRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedData: null
    };
  }

  render() {
    const { submittedData } = this.state;

    const initialValues = {
      name: '',
      email: '',
      qualification: ''
    };

    const validationSchema = Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      qualification: Yup.string().required('Qualification is required')
    });

    const onSubmit = (values, { resetForm }) => {
      this.setState({ submittedData: values });
      resetForm();
    };

    return (
      <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Student Registration Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '14px' }} />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '14px' }} />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="qualification">Qualification:</label>
                <Field type="text" id="qualification" name="qualification" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                <ErrorMessage name="qualification" component="div" style={{ color: 'red', fontSize: '14px' }} />
              </div>

              <button type="submit" disabled={isSubmitting} style={{ padding: '10px 15px', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Register
              </button>
            </Form>
          )}
        </Formik>

        {submittedData && (
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Qualification:</strong> {submittedData.qualification}</p>
          </div>
        )}
      </div>
    );
  }
}

export default StudentRegistrationForm;