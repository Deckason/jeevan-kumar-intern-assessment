import React from 'react'
import styles from "./sideNav.module.css"
import { FaRegNewspaper } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { TbCashBanknote } from "react-icons/tb";
import { PiNeedle } from "react-icons/pi";


const Dashboards = () => {
  return (
    <section className={styles.section}>
        <h6>Processes</h6>
        <div className={styles.buttonGroup}>
            <span><FaRegNewspaper className={styles.icon}/>Registration</span>
            <span><HiOutlineDocumentText className={styles.icon}/>Consultation</span>
            <span><PiNeedle className={styles.icon}/>Tests & Reports</span>
            <span><TbCashBanknote className={styles.icon}/>Billing</span>
        </div>
    </section>
  )
}

export default Dashboards