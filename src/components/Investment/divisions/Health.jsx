import styles from './Divisions.module.css';

const Health = () => {
  return (
    <div className={`${styles.card} ${styles.health}`}>
        <div className={styles.cardFlex}>
            <div>
                <h3>HEALTHCARE: END-WELL MEDICARE</h3>
                <p>
                    <span>Focus:</span> Community-Oriented, Preventive and Primary Healthcare
                </p>
                <p>
                    At End-Well MediCare, our healthcare investments aim to close the 
                    accessibility & affordability gaps in medical services by targeting 
                    underserved and semi-urban populations.
                </p>
                <span>Services Provided:</span>
                <p>Establishment of diagnostic centres & clinics to cover:</p>
                <ul>
                    <li>Medical Laboratory Services, Optometry Service, Dentalcare Services,</li>
                    <li>RadiologyCare Services, Dietetic clinic (Food Hospital)</li>
                    <li>Audiology & Speechtherapy Care, Physiotherapy services,</li>
                    <li>ECG, Echo & Spirometry services</li>
                </ul>
                <span>Pharmacy Services</span>
                <ul>
                    <li>Mobile Medical Outreach Services</li>
                    <li>Health education and disease prevention programs</li>
                    <li>Establishment of medical social home for aged.</li>
                </ul>
                <span>Strategic Expansion Plan:</span>
                <ul>
                    <li>Specialist clinics</li>
                    <li>Health worker training programs</li>
                    <li>Telemedicine platforms for rural areas</li>
                    <li>Pharmaceutical distribution partnerships</li>
                    <li>Production of medical reagents and consumables</li>
                </ul>
            </div>
            <div>
                <img src="/images/healthcare.jpg" alt="" />
            </div>
        </div>
        <a href="">CLICK TO INVEST</a>
    </div>
  )
}

export default Health
