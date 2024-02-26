import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css"
import { useRef } from "react"

function Register() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const navigate = useNavigate();

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
      name: nameRef.current.value,
      password: passwordRef.current.value, 
      status: "active"
    }
   
    let data = getData()
    data.push(user);
    localStorage.setItem('user', JSON.stringify(data));
    nameRef.current.value=''
    passwordRef.current.value=''
    rePasswordRef.current.value=''
    navigate("/login")
  }
  }

  function getData() {
    let data = [];
    if(localStorage.getItem('user')) {
        data = JSON.parse(localStorage.getItem('user'))
    }

    return data
}


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <div className={styles.sign}>
      <label>Name:</label>
      <input ref={nameRef} type="text" placeholder="Name..." />
      </div>

      <div className={styles.sign}>
      <label>Password:</label>
      <input ref={passwordRef} type="password" placeholder="Password..."/>
      </div>
      
      <div className={styles.sign}>
      <label>Re-password:</label>
      <input ref={rePasswordRef} type="password" placeholder="Re-password..." />
      </div>
      <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Register