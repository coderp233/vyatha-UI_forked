import React from 'react';
import styles from './SignupAdmin.module.scss'


const SignupAdmin=()=>{

    return(
        <div className={styles.admin_form}>
          <div className={styles.content}>
          <div className={styles.title}>Sign up</div>
        <form className={styles.form}>

          <div className={styles.container}>

      <div className={styles.input_group}>
        <input type="text" required="required" className={styles.input} id="control" placeholder='Name'/>
        <label className={styles.Placeholder} for="control">Name</label>
      </div>
    
      <div className={styles.input_group}>
        <input id='control1' type="email" className={styles.input} required="required" placeholder='Email' />
        <label for="control1" className={styles.Placeholder}>Email</label>
      </div>
      
      <div className={styles.input_group} >
        
      {/* <p  className={styles.input} placeholder="Designation"></p> */}
  <select id='control5' name="design" placeholder='select one-' className={styles.select_step} style={{width:'20.375rem', height:'5.5vh'}} >
    <option value="select one">select one</option>
  <option value="supervisor" >Supervisor</option>
  <option value="warden" >Warden</option>
  <option value="dean"  >Dean</option>

</select>
<label For="control5" >Designation</label>
      </div>
  
      < div className={styles.input_group}>
        <input id="control2" type="tel" className={styles.input} pattern='[0-9]{5}-[0-9]{5}' placeholder='Phone'  required="reqired" />
        <label className={styles.Placeholder} for="control2">Phone</label>
      </div>
      
      <div className={styles.input_group}>
        <input id="control3" type="password" className={styles.input} required="required" placeholder='password'/>
        <label for="control3" className={styles.Placeholder}>Password</label>
      </div>
      
      <div className={styles.input_group}>
        <input id="control4" type="password" className={styles.input} required="required" placeholder='confirm'/>
        <label id="control4" className={styles.Placeholder}>Confirm Password</label>
      </div>
      
      </div>
      <div className={styles.submit_btn}>
        <input type="submit" className={styles.sub_btn}/>
      </div>
      
</form>
</div>
</div>
    )
}
export default SignupAdmin;