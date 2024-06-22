import React from 'react'
import styles from "./login.module.css"

const page = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <h1>Login</h1>
            <input type='text' name='name' placeholder='username' />
            <input type='text' name='password' placeholder='password' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default page