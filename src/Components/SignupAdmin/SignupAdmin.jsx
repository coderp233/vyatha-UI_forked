import React,{useState} from 'react';
import styles from './SignupAdmin.scss'


const SignupAdmin=()=>{

    return(
        <div className="admin-form">
          <div className="content">
          <div className="title">Sign up</div>
        <form>
          <div className="container">
      <div className="input-group">
        <input type="text" required="required" className="input"/>
        <label className="Placeholder">Name</label>
      </div>
      <br/>
      <div className="input-group">
        <input type="email" className="input" required="required" />
        <label className="Placeholder">Email</label>
      </div>
      
      <div className="input-group" >
      <label for="Designation" className="input" placeholder="Designation"></label>
  <select name="design" className="select_step" style={{width:'326px', height:'40px',position: "relative", top: "-22px"}} >
  <option value="select" className="Placeholder" >Designation</option>
  <option value="supervisor">Supervisor</option>
  <option value="warden">Warden</option>
  <option value="dean">Dean</option>
</select>
      </div>
  
      <div className="input-group">
        <input type="number" className="input" required="reqired" />
        <label className="Placeholder">Phone</label>
      </div>
      <br/>
      <div className="input-group">
        <input type="password" className="input" required="required"/>
        <label className="Placeholder">Password</label>
      </div>
      <br/>
      <div className="input-group">
        <input type="password" className="input" required="required" />
        <label className="Placeholder">Confirm Password</label>
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