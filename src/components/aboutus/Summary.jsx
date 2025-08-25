import styles from './Summary.module.css';
import 'aos/dist/aos.css';

const Summary = () => {
  return (
    <div className={styles.container}>
          <div className={styles.flex} data-aos="fade-up" data-aos-delay="300">
            <div className={styles.text}>
                <h2>EXECUTIVE SUMMARY</h2>
                <p>
                    EXECUTIVE SUMMARY End-Well Investment Hub Limited is a diversified investment company founded with
                    a bold vision to create sustainable values 
                    across multiple high-impact sectors. 
                    With initial operations centered in Nigeria and strategic plans to scale across Africa, our company
                    is committed to empowering communities, accelerating development, and delivering measurable returns 
                    through value-aligned investments in RealEstate, Industries (e.g., agribusiness, fashion & shoe, 
                    textile, healthy water & natural fruit juice… etc.) Healthcare, Education, 
                    and, in the nearest future, mineral resources (i.e., Oil & Gas, natural resources and the likes).
                </p>
                <div className={styles.webShow} data-aos="fade-up" data-aos-delay="700">
                <h4 className={styles.incorporated}>Incorporated: 26th day of April, 2024</h4>
                <h4 className={styles.number}>Registration Number: 7467393s</h4>
                <h4 className={styles.certificate}>SCUM Certificate: RN: Sc 301800798</h4>
            </div>
            </div>
            <div className={styles.relative}>
                <img src="/images/homeabout.jpg" alt="" data-aos="flip-up" data-aos-delay="400"/>
                <div data-aos="fade-up" data-aos-delay="500"></div>
            </div>
          </div>
            <div className={styles.hidden} data-aos="fade-up" data-aos-delay="600">
                <h4 className={styles.incorporated}>Incorporated: 26th day of April, 2024</h4>
                <h4 className={styles.number}>Registration Number: 7467393s</h4>
                <h4 className={styles.certificate}>SCUM Certificate: RN: Sc 301800798</h4>
            </div>
    </div>
  )
}

export default Summary
