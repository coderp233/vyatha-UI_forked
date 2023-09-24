import React from 'react';
import './SignupAdmin.scss'


const SignupAdmin=()=>{

    return(
        <div className="admin-form">
          <div className="content">
          <div className="title">Sign up</div>
        <form>
          <div className="container">
      <div className="input-group">
        <input id='control' type="text" required="required" className="input"/>
        <label for="control" className="Placeholder">Name</label>
      </div>
      <br/>
      <div className="input-group">
        <input id='control1' type="email" className="input" required="required" />
        <label for="control1" className="Placeholder">Email</label>
      </div>
      
      <div className="input-group" >
      <label for="Designation1" className="input" placeholder="Designation"></label>
  <select id='Designation1' name="design" className="select_step" style={{width:'326px', height:'40px',position: "relative", top: "-22px"}} >
  <option value="select" className="Placeholder" >Designation</option>
  <option value="supervisor">Supervisor</option>
  <option value="warden">Warden</option>
  <option value="dean">Dean</option>
</select>
      </div>
  
      <div className="input-group">
        <input id='control2' type="number" className="input" required="reqired" />
        <label for="control2" className="Placeholder">Phone</label>
      </div>
      <br/>
      <div className="input-group">
        <input id='control3' type="password" className="input" required="required"/>
        <label for="control3" className="Placeholder">Password</label>
      </div>
      <br/>
      <div className="input-group">
        <input id='control4' type="password" className="input" required="required" />
        <label for="control4" className="Placeholder">Confirm Password</label>
      </div>
      <br/></div>
      <div className="submit-btn">
        <input type="submit" className="sub-btn"/>
      </div>
      
</form>
</div>
</div>
    )
}
export default SignupAdmin;