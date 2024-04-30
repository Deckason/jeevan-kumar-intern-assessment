import React from 'react'
import styles from "./Cconsoltants.module.css"
import { HiArrowSmallDown, HiArrowUturnRight } from 'react-icons/hi2'
import MockData from "../../../userData/MOCK_DATA.json"

const ConsultantsTable = () => {

    const getRandomNum = ()=> Math.ceil(Math.random()*20)

  return (
    <div className={`${styles.container} ${styles.consultantsTable}`}>
        <div className={styles.header}>
            <h4>Consulants</h4>
            <div className={styles.icons}>
                <span><HiArrowUturnRight /></span>
                <span><HiArrowSmallDown /></span>
            </div>
        </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PATIENT COUNT</th>
                    <th>LABS</th>
                    <th>DIET PLANS</th>
                </tr>
            </thead>
            <tbody>
                {MockData.map(user=>(
                    <tr>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{getRandomNum()}</td>
                        <td>{getRandomNum()}</td>
                        <td>{getRandomNum()}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ConsultantsTable