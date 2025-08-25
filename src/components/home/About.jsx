import { Link } from 'react-router-dom';
import styles from './About.module.css';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 data-aos="fade-up" data-aos-delay="400">KNOW MORE ABOUT EWIHL</h1>
      <div className={styles.flex} data-aos="fade-up" data-aos-delay="800">
        <div>
            <p>
              End-Well Investment Hub Limited is a diversified investment company founded with a bold 
              vision to create sustainable values across multiple high-impact sectors. With initial 
              operations centered in Nigeria and strategic plans to scale across Africa, our company is 
              committed to empowering communities, accelerating development, and delivering measurable returns 
              through value-aligned investments in RealEstate, Industries (e.g., agribusiness, fashion & shoe, 
              textile, healthy water & natural fruit juice… etc.) Healthcare, Education, and, 
              in the nearest future, mineral resources (i.e., Oil & Gas, natural resources and the likes).
            </p>
            <Link to='about-us' data-aos="fade-up" data-aos-delay="1000">READ MORE</Link>
        </div>
        <div className={styles.relative}>
            <img src="/images/homeabout.jpg" alt="" data-aos="flip-up" data-aos-delay="800"/>
            <div data-aos="fade-up" data-aos-delay="900"></div>
        </div>
      </div>
    </div>
  )
}

export default About
