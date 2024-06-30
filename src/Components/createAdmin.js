import React from 'react';
import { useFormik } from 'formik';
import uploadImage from "../assets/upload.png";

function CreateAdmin() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      contactNumber: '',
      address: '',
      organization: '',
      file: null, // Add file to the initial values
    },
    validate: values => {
      let errors = {};

      if (!values.name) {
        errors.name = "Please enter a name";
      }

      if (!values.email) {
        errors.email = "Please enter an email";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }

      if (!values.password) {
        errors.password = "Please enter a password";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Please enter a confirm password";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },
    onSubmit: values => {
      console.log(values);
      // Handle the file upload as needed
    },
  });

  // Handle file input change
  const handleFileChange = (event) => {
    formik.setFieldValue('file', event.currentTarget.files[0]);
  };

  return (
    <div className='container mt-5'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='col-lg-6'>
            <label>Name</label>
            <input
              name="name"
              type="text"
              className='form-control'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className='col-lg-6'>
            <label>Email</label>
            <input
              name="email"
              type="email"
              className='form-control'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='col-lg-6 '>
            <label>Password</label>
            <input
              name="password"
              type="password"
              className='form-control'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='col-lg-6 '>
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              className='form-control'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <div className='col-lg-6 '>
            <label>Contact Number</label>
            <input
              name="contactNumber"
              type="text"
              className='form-control'
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className='col-lg-6 '>
            <label>Address</label>
            <input
              name="address"
              type="text"
              className='form-control'
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className='col-lg-6 '>
            <label>Select Organization</label>
            <input
              name="organization"
              type="text"
              className='form-control'
              value={formik.values.organization}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className='col-lg-6 '>
            <label>Upload File</label>
            <input
              name="file"
              type="file"
              className='form-control d-none'
              onChange={handleFileChange}
              ref={input => formik.fileInput = input} // reference to the file input
            />
            <img 
              src={uploadImage} 
              alt="upload" 
              style={{cursor: 'pointer'}}
              onClick={() => formik.fileInput.click()} // trigger file input click
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-1'>
            <button type="submit" className="btn btn-primary mt-5">Submit</button>
          </div>
          <div className='col-lg-1'>
            <button type="reset" className="btn btn-info mt-5 mx-0" onClick={formik.handleReset}>Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAdmin;
