import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'><span className={styles.logoColor1}>{'{'} kurt_</span><span className={styles.logoColor2}>lekanger {'}'}</span></Link>
        <div className={styles.navMenu}><a href='https://linkedin.com/in/lekanger'>LinkedIn</a> –<a href='https://github.com/klekanger'>Github</a></div>
      </div>

      {/*  --- commented out the nav/hamburger menu
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/archive/'>Arkiv</Link>
          </li>
        </ul>
      </nav>
          */}

    </div>
  </div >
)

export default Header
