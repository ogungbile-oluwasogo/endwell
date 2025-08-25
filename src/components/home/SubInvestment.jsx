import styles from './Investment.module.css';
import 'aos/dist/aos.css';

const SubInvestment = () => {
  return (
    <div className={styles.subContainer}>
                <div className={`${styles.realtors} ${styles.card}`} data-aos="fade-up">
                    <h2 data-aos="fade-up" data-aos-delay="900">REAL ESTATE: <br />END-WELL REALTORS</h2>
                    <img src="/images/realtors.jpg" alt="" data-aos="flip-up" data-aos-delay="900" />
                    <p>
                        Focus: Student Hostel Development (PBSA - Purpose-Built Student Accommodation)
                        End Well Realtors is the fulcrum of our real estate operations. A platform to address student 
                        housing facility which will be affordable, secured and void of any immoral operations had been envisioned and 
                        shall be put in place. 
                        Our plan is to build state of the art hostels near or inside tertiary institutions across the country.
                    </p>
                    <a href="">VIEW IINVESTMENT</a>
                </div>
                <div className={`${styles.agricare} ${styles.card}`} data-aos="fade-up">
                    <h2 data-aos="fade-up" data-aos-delay="900">INDUSTRIES: <br />AGRICULTURAL: END-WELL AGRICARE</h2>
                    <img src="/images/agricare.jpg" alt="" data-aos="flip-up" data-aos-delay="1000"/>
                    <p>
                        Focus: Integrated Food Value Chain Development
                        End-Well AgriCare aims to boost food security and economic empowerment by
                        operating along the entire agricultural value chain—from production to processing 
                        and distribution.
                    </p>
                    <a href="">VIEW IINVESTMENT</a>
                </div>
                <div className={`${styles.healthcare} ${styles.card}`} data-aos="fade-up">
                    <h2 data-aos="fade-up" data-aos-delay="900">HEALTHCARE: <br />END-WELL MEDICARE</h2>
                    <img src="/images/healthcare.jpg" alt="" data-aos="flip-down" data-aos-delay="1000"/>
                    <p>
                        Focus: Community-Oriented, Preventive and Primary Healthcare
                        At End-Well MediCare, our healthcare investments aim to close the accessibility & 
                        affordability gaps in medical services by targeting underserved and semi-urban populations.
                    </p>
                    <a href="">VIEW IINVESTMENT</a>
                </div>
                <div className={`${styles.education} ${styles.card}`} data-aos="fade-up">
                    <h2 data-aos="fade-up" data-aos-delay="900">EDUCATION: <br />END-WELL EDUCARE</h2>
                    <img src="/images/education.jpg" alt="" data-aos="flip-up" data-aos-delay="600"/>
                    <p>
                        Focus: Inclusive, Affordable, and Tech-Driven Education
                        End Well-EduCare is committed to enhancing educational access and quality, equipping young 
                        Africans with 21st-century skills through innovative, inclusive solutions.
                    </p>
                    <a href="">VIEW IINVESTMENT</a>
                </div>
                <div className={`${styles.mineral} ${styles.card}`} data-aos="fade-up">
                    <h2 data-aos="fade-up" data-aos-delay="900">MINERAL RESOURCES (OIL & GAS, FUTURE <br /> DIVISION): END-WELL ENERGY</h2>
                    <img src="/images/mineral.jpg" alt="" data-aos="flip-up" data-aos-delay="600"/>
                    <p>
                        Focus: Natural resources exploration, e.g., sand, gold, cement production…etc.
                        Downstream Operations & Future Renewable Energy Transition
                        In line with Nigeria’s energy needs and economic roadmap, End-Well Energy is positioned to enter the
                        Oil & Gas sector strategically, 
                        starting with downstream activities and gradually evolving towards renewable energy solutions.
                    </p>
                    <a href="">VIEW IINVESTMENT</a>
                </div>
    </div>
  )
}

export default SubInvestment
