import styles from "./Register.module.css"
import { useRef } from "react"

function Register() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  function validate() {
    if(!nameRef.current.value) {
      nameRef.current.focus()
      alert("Name is null")
      return false
    }

    if (!passwordRef.current.value) {
      passwordRef.current.focus()
      alert("Password is null")
      return false
    }

    if(!Number(passwordRef.current.value)) {
      passwordRef.current.focus()
      alert("Password is not number")
      return false
    }

    if(!rePasswordRef.current.value) {
      rePasswordRef.current.focus()
      alert("Re-Password is null")
      return false
    }

    if(passwordRef.current.value != rePasswordRef.current.value) {
      rePasswordRef.current.focus()
      alert("Password does not match")
      return false
    }

    return true
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(validate()){
    const user = {
      name: nameRef,
      password: passwordRef 
    }
    localStorage.setItem("user", JSON.stringify(user))
  }
  }


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <div className={styles.sign}>
      <label>Name</label>
      <input ref={nameRef} type="text" placeholder="Name..." />
      </div>

      <div className={styles.sign}>
      <label>Password</label>
      <input ref={passwordRef} type="password" placeholder="Password..."/>
      </div>
      
      <div className={styles.sign}>
      <label>Re-password</label>
      <input ref={rePasswordRef} type="password" placeholder="Re-password..." />
      </div>
      <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Register