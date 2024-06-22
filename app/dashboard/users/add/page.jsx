import React from 'react'
import styles from "./adduser.module.css"
const AddUserPage = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type='text' placeholder='username' name='username' />
            <input type='email' placeholder='email' name='email' />
            <input type='password' placeholder='password' name='password' />
            <input type='phone' placeholder='password' name='password' />
            <select name='isAdmin' id='isAdmin'>
                <option value={false} selected>isSelected ?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select name='isActive' id='isActive'>
                <option value={true} selected>is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <textarea
            name='address'
            id='address'
            rows='16'
            placeholder='address'
            >
            </textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUserPage