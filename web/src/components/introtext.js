import React from 'react'
import styles from './introtext.module.css'

const IntroText = () => {
  return (
    <div className={styles.introtext}>
      <p>Velkommen til mitt lille skjulested på interweben!</p>
      <p>Jeg jobber til daglig som redaktør for <a href='https://digi.no'>Digi.no</a>, og har mer enn 25 års erfaring som journalist og redaktør i ulike medier, i hovedsak innenfor IT-journalistikk.</p>
      <p>Denne nettsiden er viet til en av mine store interesser; programvare- og web-utvikling. Jeg har hatt stor interesse for koding siden helst siden jeg drev med 6510-assembly på Commodore 64 på 80- og 90-tallet, og senere Turbo Pascal. Nå bruker jeg mye av fritiden – og tiden jeg bruker på å pendle til og fra jobb – til å bli enda bedre på moderne web- og app-utvikling.</p>
      <p>Behersker også litt programmering på hobbynivå, blant annet HTML/CSS og Javascript/Node.js, MongoDB og ExpressJS, samt noenlunde avansert React, litt Next.js, Gatsby, og en del Python-programmering, osv.</p>
      <p>Dette nettstedet er laget i React-rammeverket <a href='https://www.gatsbyjs.org/'>Gatsby</a>, med den norskutviklede «headless-CMS»-løsningen <a href='https://sanity.io/'>Sanity.io</a> som backend for innhold. Løsningen er satt opp med «continous deployment» hos <a href='https://www.netlify.com/'>Netlify.</a> </p>
      <p>Fullstendig CV for de som er interessert ligger på <a href='https://linkedin.com/in/lekanger'>LinkedIn.</a></p>
    </div>
  )
}

export default IntroText
