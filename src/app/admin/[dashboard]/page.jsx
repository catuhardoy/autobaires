'use client'

import React from 'react';
import styles from './dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      dashboard
        <div className={styles.item}>
          un auto
        </div>
        <div className={styles.item}>
          otro auto
        </div>
    </div>
  )
}

export default Dashboard
