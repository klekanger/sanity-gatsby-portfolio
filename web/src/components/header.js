import { Link } from 'gatsby'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <motion.div
          initial={{ y: -150, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20
          }}
        >
          <Link to='/'><span className={styles.logoColor1}>{'{'} kurt_</span><span className={styles.logoColor2}>lekanger {'}'}</span></Link>
        </motion.div>
        <div className={styles.navMenu} ><a href='https://linkedin.com/in/lekanger'>LinkedIn</a> –<a href='https://github.com/klekanger'>Github</a></div>
      </div>
    </div>
  </div>
)

export default Header