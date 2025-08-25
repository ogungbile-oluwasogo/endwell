import styles from './Divisions.module.css';

const Realtor = () => {
  return (
    <div className={`${styles.card} ${styles.realtor}`}>
      <div className={styles.cardFlex}>
        <div>
          <h3>1. REAL ESTATE: END-WELL REALTORS</h3>
          <p><span>Focus:</span> Student Hostel Development (PBSA - Purpose-Built Student Accommodation)</p>
          <p>
            End Well Realtors is the fulcrum of our real estate operations. 
            A platform to address student housing facility which will be affordable, 
            secured and void of any immoral operations had been envisioned and shall be put in place. 
            Our plan is to build state of the art hostels near or inside tertiary institutions across the country.
          </p>
          <span>Current Services:</span>
          <ul>
            <li>Design and construction of high-density student accommodations</li>
            <li>Long-lease and rent-to-own hostel solutions</li>
            <li>Hostel management and maintenance services</li>
            <li>Strategic partnerships with universities and polytechnics</li>
            <li>Smart student housing solutions with biometric access and e-learning lounges</li>
          </ul>
          <span>Future Outlook:</span>
          <ul>
            <li>Urban mid-income housing estates</li>
            <li>Green building projects and sustainable housing initiatives</li>
          </ul>
        </div>
        <div>
          <img src="/images/realtors.jpg" alt="" />
        </div>
      </div>
      <a href="">CLICK TO INVEST</a>
    </div>
  )
}

export default Realtor
