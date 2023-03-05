import React from 'react';
import styles from './Landing.module.css';

const LandingPage = () => {
  return (
    <div className={styles.wrap}>
         <div id={styles.banner}>
            <h1 className={styles.logo}>ACE'S PET SHOP</h1>
            <div id="action">
                <a href="/Shop">SHOP NOW</a>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;