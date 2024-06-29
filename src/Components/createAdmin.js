import React from 'react'

function createAdmin() {
  return (
    <div className='container mt-5'>
    <div className='row'>
        <div className='col-lg-6'>
            <label>Name</label>
            <input class="input" type={"text"} className='form-control'/>
        </div>
        <div className='col-lg-6'>
            <label>Email</label>
            <input class="input" type={"text"} className='form-control'/>
        </div>
        <div className='col-lg-6 '>
            <label>Password</label>
            <input type={"text"} className='form-control'/>
        </div>
        <div className='col-lg-6 '>
            <label>Contact Number</label>
            <input type={"text"} className='form-control'/>
        </div>
        <div className='col-lg-6 '>
            <label>Confirm Password</label>
            <input type={"text"} className='form-control'/>
        </div>
        <div className='col-lg-6 '>
            <label>Address</label>
            <input type={"text"} className='form-control'/>
        </div>
        <div className='col-lg-6 '>
            <label>Select Organization</label>
            <input type={"text"} className='form-control'/>
        </div>
       
    </div>
    <div className='row'>
        <div className='col-lg-1'>
        <button type="button" class="btn btn-primary mt-5">Submit</button>
        </div>
        <div className='col-lg-1'>
        <button type="button" class="btn btn-info  mt-3 mt-5 mx-0">Reset</button>
         </div>
    </div>
        </div>
  )
}

export default createAdmin