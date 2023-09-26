import React from 'react';
import styles from './SignupAdmin.module.scss'


const SignupAdmin=()=>{

    return(
        <div className={styles.admin_form}>
          <div className={styles.content}>
          <div className={styles.title}>Sign up</div>
        <form>
          <div className={styles.container}>
      <div className={styles.input_group}>
        <input type="text" required="required" className={styles.input} id="control"/>
        <label className={styles.Placeholder} htmlFor="control">Name</label>
      </div>
      <br/>
      <div className={styles.input_group}>
        <input id='control1' type="email" className={styles.input} required="required"  />
        <label htmlFor="control1" className={styles.Placeholder}>Email</label>
      </div>
      
      <div className={styles.input_group} >
      <label htmlFor="Designation" className={styles.input} placeholder="Designation"></label>
  <select name="design" className={styles.select_step} style={{width:'20.375rem', height:'5.41vh',position: "relative", top: "-1.375rem"}} >
  <option value="select" className={styles.Placeholder} >Designation</option>
  <option value="supervisor">Supervisor</option>
  <option value="warden">Warden</option>
  <option value="dean">Dean</option>
</select>
      </div>
  
      <div className={styles.input_group}>
        <input id="control2" type="number" className={styles.input} required="reqired" />
        <label className={styles.Placeholder} htmlFor="control2">Phone</label>
      </div>
      <br/>
      <div className={styles.input_group}>
        <input id="control3" type="password" className={styles.input} required="required"/>
        <label htmlFor="control3" className={styles.Placeholder}>Password</label>
      </div>
      <br/>
      <div className={styles.input_group}>
        <input id="control4" type="password" className={styles.input} required="required" />
        <label htmlFor="control4" className={styles.Placeholder}>Confirm Password</label>
      </div>
      <br/></div>
      <div className={styles.submit_btn}>
        <input type="submit" className={styles.sub_btn}/>
      </div>
      
</form>
</div>
</div>
    )
}
export default SignupAdmin;