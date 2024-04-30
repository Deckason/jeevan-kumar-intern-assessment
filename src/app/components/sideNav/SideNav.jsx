import React from 'react'
import styles from "./sideNav.module.css"
import Dashboards from './Dashboards'
import Processess from './processes'

const sideNav = () => {
  return (
    <nav className={styles.nav}>
        <Dashboards />
        <Processess />
    </nav>
  )
}

export default sideNav