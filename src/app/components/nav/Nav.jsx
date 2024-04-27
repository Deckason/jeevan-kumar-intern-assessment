import React from 'react'
import styles from "../nav/Nav.module.css"
import { CiSearch } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import Image from 'next/image';
import profilePic from "../../../../public/media/profile.jpg"

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <select>
              <option value="option1">Patients</option>
              <option value="option2">Doctors</option>
              <option value="option3">Nurses</option>
            </select>
            <input type='text' placeholder='Search' />
            <CiSearch className={styles.searchIcon}/>
          </div>
          <button><span>&#x002B;</span> Add New</button>
        </div>
        <div className={styles.profileNotification}>
            <div className={styles.notificationContainer}>
              <span></span>
              <MdNotificationsNone className={styles.notificationIcon}/>
          </div>
          <div className={styles.profilePic}>
            <Image 
              src={profilePic}
              width={500}
              height={300}
              alt='profile-pic'
            />
          </div>
        </div>
      </nav>
  )
}

export default Nav