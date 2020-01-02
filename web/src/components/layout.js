import React from 'react'
import Header from './header'
import ContactInfo from './contact-info'

import '../styles/layout.css'
import styles from './layout.module.css'
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <ContactInfo />
        <div className={styles.siteInfo}>
          © Kurt Lekanger {new Date().getFullYear()}, Laget med <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
