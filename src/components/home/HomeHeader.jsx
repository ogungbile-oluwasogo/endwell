
import { Link } from "react-router-dom";
import styles from "./HomeHeader.module.css";
import 'aos/dist/aos.css';

const HomeHeader = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.container}>
          <h1 data-aos="fade-in" data-aos-delay="400">End Well Investment Hub Limited (EWIHL)</h1>
          <h2 data-aos="fade-in" data-aos-delay="600">Decent Lives, Services & Products…Decent Services to Humanity...</h2>
          <Link to='/investments' data-aos="fade-up" data-aos-delay="800">Get Started Now</Link>
      </div>
      <div className={styles.certificate}>
        <p className={styles.incorporated} data-aos="fade-up">Incorporated: 26th day of April, 2024</p>
        <p className={styles.registration} data-aos="fade-up" data-aos-delay="600">Registration Number: 7467393s</p>
        <p className={styles.scum} data-aos="fade-up" data-aos-delay="1000">SCUM Certificate: RN: Sc 301800798</p>
      </div>
    </div>
  )
}

export default HomeHeader
