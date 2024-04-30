import React from 'react'
import styles from "./filters.module.css"

const Filters = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <p>Filters</p>
        <span></span>
      </div>
      <select name="" id="" className={styles.select}>
        <option value="" hidden>Select Range</option>
        <option value="">Option1</option>
        <option value="">Option1</option>
      </select>
      <div className={styles.checkButtons}>
        <label htmlFor="Summary">
          <input type="checkbox" name="" id="" />
          <p>Summary</p>
        </label>
        <label htmlFor="Branch Wise">
          <input type="checkbox" name="" id="" />
          <p>Branch Wise</p>
        </label>
      </div>
    </div>
  )
}

export default Filters