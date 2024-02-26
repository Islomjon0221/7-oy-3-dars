
import styles from "./Login.module.css"

function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.formWrapper}>
      <div className={styles.sign}>
      <label>Name</label>
      <input type="text" placeholder="Name..." />
      </div>

      <div className={styles.sign}>
      <label>Password</label>
      <input type="password" placeholder="Password..."/>
      </div>
      
      <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Login