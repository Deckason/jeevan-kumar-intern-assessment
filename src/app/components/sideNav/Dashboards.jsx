import React from 'react'
import styles from "./sideNav.module.css"
import { FaRegCircleUser } from "react-icons/fa6";
import { BsDatabase, BsHospital } from "react-icons/bs";
import { PiFunnelLight } from "react-icons/pi";


const Dashboards = () => {
  return (
    <section className={styles.section}>
        <h6>Dashboards</h6>
        <div className={styles.buttonGroup}>
            <span><FaRegCircleUser className={styles.icon}/>Patients</span>
            <span><BsDatabase className={styles.icon}/>HR</span>
            <span><PiFunnelLight className={styles.icon}/>Labs</span>
            <span><BsHospital className={styles.icon}/>Pharma</span>
        </div>
    </section>
  )
}

export default Dashboards