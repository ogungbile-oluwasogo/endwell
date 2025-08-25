import styles from './Divisions.module.css';

const Education = () => {
  return (
    <div className={`${styles.card} ${styles.education}`}>
        <div className={styles.cardFlex}>
            <div>
                <h3>EDUCATION: END-WELL EDUCARE</h3>
                <p>
                    <span>Focus:</span> Inclusive, Affordable, and Tech-Driven Education
                </p>
                <p>
                  End Well-EduCare is committed to enhancing educational access and quality, 
                  equipping young Africans with 21st-century skills through innovative, inclusive solutions.
                </p>
                <span>Programs and Investments:</span>
                <ul>
                    <li>Development of private schools (basic and secondary levels)</li>
                    <li>Technical and vocational education centers</li>
                    <li>Scholarships for indigent but brilliant students</li>
                    <li>Digital learning platforms and virtual classrooms</li>
                </ul>
                <span>Future Objectives:</span>
                <ul>
                    <li>E-learning and blended education solutions</li>
                    <li>Curriculum development in collaboration with industry stakeholders</li>
                    <li>Teacher training and continuous development programs</li>
                    <li>Strategic academic partnerships (local and international)</li>
                </ul>
            </div>
            <div>
                <img src="/images/education.jpg" alt="" />
            </div>
        </div>
        <a href="">CLICK TO INVEST</a>
    </div>
  )
}

export default Education
