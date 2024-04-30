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
        <label htmlFor="checkbox">
          <input type="radio" name="" id="checkbox" className={styles.input} />
          <p>Summary</p>
        </label>
        <label htmlFor="checkbox">
          <input type="radio" name="" id="checkbox" className={styles.input} />
          <p>Branch Wise</p>
        </label>
      </div>
    </div>
  )
}

export default Filters