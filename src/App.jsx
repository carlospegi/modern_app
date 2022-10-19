
import React from 'react'
import styles from './style'
import { Billing, Business, CardDetail, CTA, Footer, NavBar, Hero, Testimonials, Clients, Stats } from './components'

const App = () =>
(
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`} >
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={styles.boxWidth} >
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} `}>
      <div className={styles.boxWidth} >
        <Stats />
        <Business />
        <Billing />
        <CardDetail />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>


)


export default App
