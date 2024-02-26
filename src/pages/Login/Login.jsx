import { useRef } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function getData() {
    let data = [];
    if (localStorage.getItem("user")) {
      data = JSON.parse(localStorage.getItem("user"));
    }
    return data;
  }

  function validate() {
    if (!nameRef.current.value) {
      nameRef.current.focus();
      alert("Name is null");
      return false;
    }

    if (!passwordRef.current.value) {
      passwordRef.current.focus();
      alert("Password is null");
      return false;
    }

    if (!Number(passwordRef.current.value)) {
      passwordRef.current.focus();
      alert("Password is not a number");
      return false;
    }

    return true; // Add this line to indicate validation passed
  }

  function filterTrue(user) {
    if (user.status === "active" &&
      user.name === nameRef.current.value &&
      user.password === passwordRef.current.value
    ) {
      return true
    } else { return false }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      const data = getData();
      const filtered = data.filter(
        user =>
          filterTrue(user)
      );
      if (filtered) {
        navigate("/");
      } else {
        alert("Error");
      }
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
          <input ref={passwordRef} type="password" placeholder="Password..." />
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Login;