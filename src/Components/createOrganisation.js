import React from 'react'
import uploadImage from "../assets/upload.png"
function createOrganisation() {
  return (
    <div className='container mt-5'>
<div className='row'>
    <div className='col-lg-6'>
        <label>Organisation Name</label>
        <input class="text is-invalid" type={"text"} className='form-control'/>
    </div>
    <div className='col-lg-6'>
        <label>Conatact Person Name</label>
        <input class="text is-invalid" type={"text"} className='form-control'/>
    </div>
    <div className='col-lg-6 '>
        <label>Contact Number</label>
        <input type={"text is-invalid"} className='form-control'/>
    </div>
    <div className='col-lg-6 '>
        <label>PAN Number</label>
        <input type={"text is-invalid"} className='form-control'/>
    </div>
    <div className='col-lg-6 '>
        <label>GST Number</label>
        <input type={"text"} className='form-control'/>
    </div>
    <div className='col-lg-6 '>
        <label>Address</label>
        <input type={"text"} className='form-control'/>
    </div>
    <div className='col-lg-6 '>
        <label>Theme:</label>
        <input type={"text"} className='form-control'/>
    </div>
    <div className='col-lg-6 '>
        <label>Description</label>
        <input type={"text"} className='form-control'/>
    </div>
    <div className='col-lg-6 mt-4'>
        <label>Organisation Logo</label>
        <img src={uploadImage} alt="upload"/>
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

export default createOrganisation