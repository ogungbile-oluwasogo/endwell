import Agric from './Agric';
import styles from './Divisions.module.css';
import Education from './Education';
import Health from './Health';
import Mineral from './Mineral';
import Realtor from './Realtor';

const Divisions = () => {
  return (
    <div className={styles.container}>
      <h2>INVESTMENT DIVISIONS</h2>
      <Realtor />
      <Agric />
      <Health />
      <Education />
      <Mineral />
    </div>
  )
}

export default Divisions
