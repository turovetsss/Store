import React from 'react'
import styles from "../../styles/Sidebar.module.css"
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <section>
    <div className={styles.sidebar}>
      <div className={styles.title}>
        CATEGORIES
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/categories${1}`}>
              Link
            </NavLink>
            </li>
        </ul>
      </nav>
      
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
        Help
        </a>
      </div>
    </div>
    </section>
  )
}

export default Sidebar