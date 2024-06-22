import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircle } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.bgContainer}>
            <Image src="/astronaut.png" layout="fill" objectFit="cover"/>
          </div>
          <div className={styles.texts}>
            <span className={styles.notifications}>Available now </span>
            <h3 className={styles.titles}>New Version of Admin dashboard</h3>
            <span className={styles.subtitle}>Takes less minutes</span>
            <p className={styles.description}>There are a couple of ways to see a list of branches on your local machine and remote repository depending on the level of detail you need.</p>
            <button className={styles.button}>
                <MdPlayCircle size={20}/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Rightbar