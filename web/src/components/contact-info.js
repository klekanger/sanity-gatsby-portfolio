// Contact info at the bottom of all pages

import React from 'react'
import styles from './contact-info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
  const twitter = <a href="https://twitter.com/lekanger">klekanger</a>
  const github = <a href="https://github.com/klekanger"> Github</a>
  const linkedin = <a href="https://www.linkedin.com/in/lekanger"> LinkedIn</a>

  return (
    <div className={styles.infotxt}>
      <p>
        <FontAwesomeIcon className={styles.icn} icon={faPhone} />{' '}
        <a href="tel:+4740210140">+47 - 40 21 01 40</a>{' '}
      </p>
      <p>
        <FontAwesomeIcon className={styles.icn} icon={faEnvelope} />
        <a href="mailto:kurt@lekanger.no"> kurt@lekanger.no</a>
      </p>
      <p>
        <FontAwesomeIcon className={styles.icn} icon={faTwitter} /> {twitter}
      </p>
      <p>
        <FontAwesomeIcon className={styles.icn} icon={faGithub} />
        {github}
      </p>
      <p>
        <FontAwesomeIcon className={styles.icn} icon={faLinkedin} />
        {linkedin}
      </p>
    </div>
  )
}

export default ContactInfo
