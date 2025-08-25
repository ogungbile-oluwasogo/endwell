import Bronze from './Bronze';
import Diamond from './Diamond';
import Gold from './Gold';
import styles from './Packages.module.css';
import Silver from './Silver';
import 'aos/dist/aos.css';

const Packages = () => {
  return (
    <div className={styles.container}>
        <h1 data-aos="fade-up">EWIHL PACKAGES</h1>
       <div className={styles.flex} data-aos="fade-down" data-aos-delay="400">
            <Bronze />
            <Silver />
            <Gold />
            <Diamond />
       </div>
    </div>
  )
}

export default Packages
