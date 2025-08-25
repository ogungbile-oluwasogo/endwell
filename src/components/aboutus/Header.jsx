import styles from './Header.module.css';
import Summary from './Summary';

const Header = () => {
  return (
    <>
    <div className={styles.headerWrapper}>
        <h1>GLANCE THROUGH</h1>
      <h1>End Well Investment Hub Limited </h1>
      <div className={styles.headerFlex}>
        <h2>{"{"}</h2>
        <p>Decent Lives, Services & Products…Decent Services to Humanity...</p>
        <h2>{"}"}</h2>
      </div>
    </div>
    <Summary />
    </>
  )
}

export default Header
