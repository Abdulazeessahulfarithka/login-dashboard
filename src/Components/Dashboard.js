import React from 'react'

function Dashboard() {
  return (
    <>
       <div>
        <h2>Welcome <em>Smitha Ma'am</em></h2>
        <h6>Super Admin at Cognisite Pvt.Ltd</h6>
       </div>
       
<div className='col-lg-6 mt-5 '>
 <div className='row'>
   <h3 >Current Statistics</h3>
   <div class="card border-info mb-3 " style={{"max-width":"18em"}}>
  <div class="card-body text-primary">
    <h5 class="card-title" style={{"color":"blue"}}>6</h5>
    <p class="card-text">No of Organisation</p>
  </div>
  
</div>
<div className='col-lg-6'>
   <div class="card border-info mb-3" style={{"max-width":"18em"}}>
  <div class="card-body text-primary">
    <h5 class="card-title" style={{"color":"blue"}}>12</h5>
    <p class="card-text">No of Admin</p>
  </div>
</div>
</div>
</div>
</div>
<h3>List of Admin</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Srno</th>
      <th scope="col">Admin Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Organisation</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>Rajkumar</td>
      <td>Rajkumar@Cognisite.in</td>
      <td>Bangalore</td>
      <td>Cognisite</td>
      <td>000-000-0000</td>
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>Shashi Kumar</td>
      <td>Shashikumar@Cognisite.in</td>
      <td>Bangalore</td>
      <td>Cognisite</td>
      <td>000-000-0000</td>
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>Ritikhalder</td>
      <td>Ritikhalder@Cognisite.in</td>
     <td>Bangalore</td>
      <td>Cognisite</td>
      <td>000-000-0000</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Dashboard