
import styles from "./AboutVision.module.css";
import 'aos/dist/aos.css';

const AboutVision = () => {
  return (
    <div className={styles.layoutContainer}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <div className={`${styles.card} ${styles.redCard}`} data-aos="fade-up">
            <h3 data-aos="fade-up" data-aos-delay="700">VISION STATEMENT</h3>
            <p data-aos="fade-down" data-aos-delay="1000">
                Our vision is to advance human well-being by providing high-quality services, 
                products and opportunities across all sectors, aiming to eliminate stress and enrich lives 
                regardless of geographic or socio-economic boundaries and status.
            </p>
        </div>
        <div className={`${styles.card} ${styles.purpleCard}`} data-aos="fade-up">
          <h3 data-aos="fade-up" data-aos-delay="700">MISSION STATEMENT</h3>
          <p  data-aos="fade-down" data-aos-delay="1000">
            Our mission is to provide innovative, high-quality services and products  cum basic essential 
            needs of life that enhance daily living, eliminate stress, and expand opportunities for 
            individuals across all sectors—ensuring inclusivity, accessibility, affordability and meaningful impact, 
            regardless of geographic or socio-economic boundaries through core pillars of the organization.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn} data-aos="fade-up">
        <div className={`${styles.cardtwo} ${styles.valuesCard}`} data-aos="fade-up">
          <div className={styles.flexCardTwo} data-aos="fade-up">
            <div className={styles.flexTwo}>
                <h3 data-aos="fade-up" data-aos-delay="800">CORE VALUES</h3>
                <ol data-aos="fade-up" data-aos-delay="1000">
                    <li>
                        Commitment to Serving Humanity (Philanthropy)
                        We are dedicated to delivering impactful and compassionate services that uplift and enhance the well-being of all individuals.
                    </li>
                    <li>
                        Integrity through Excellence (Virtue)
                        We uphold the highest standards of truth, fairness, equity, and justice in all our actions and decisions.
                    </li>
                    <li>
                        Unwavering Professionalism (Objectivity)
                        We maintain objectivity and impartiality, fostering a culture of respect, competence, and ethical conduct across all professions.
                    </li>
                    <li> 
                        Focus on Productivity and Humane Service (Diligence)
                        With visionary insight and strategic precision, we prioritize both exceptional productivity and a deep commitment to humane, people-centered service delivery.
                    </li>
                </ol>
            </div>
            <div className={styles.flexOne}>
                <img src="/images/value-one.jpg" alt="" data-aos="flip-up" data-aos-delay="700" />
                <img src="/images/handshake.jpg" alt="" data-aos="flip-right" data-aos-delay="900"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutVision
