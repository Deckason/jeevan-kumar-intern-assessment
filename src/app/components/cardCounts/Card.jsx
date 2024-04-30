import React from 'react'
import styles from "./cards.module.css"


const Card = ({title, count, icon, containerBg, iconBg}) => {
  return (
    <div className={styles.cardContainer} style={{background: containerBg}}>
        <div className={styles.card}>
            <div className={styles.cardDetails}>
                <h5>{title}</h5>
                <h3>{count}</h3>
                <small>Today/Period</small>
            </div>
            <span style={{background: iconBg}}>{icon}</span>
        </div>
    </div>
  )
}

export default Card