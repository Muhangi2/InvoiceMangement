import React from 'react'
import styles from "./users.module.css"
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
       <Search placeholder="Search for a user..."/>
       <Link href="/dashboard/users/add">
         <button  className={styles.addButton}>Add New</button>
       </Link>
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>CreatedAt</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div className={styles.user}>
                    <Image src="/noavatar.png" alt="" width={40} height={40}/>
                 </div>
              </td>
              <td>eliod@gmail.com</td>
              <td>23.04.455</td>
              <td>admin</td>
              <td>active</td>
              <td>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage