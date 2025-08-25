import styles from './Divisions.module.css';

const Mineral = () => {
  return (
    <div className={`${styles.card} ${styles.mineral}`}>
        <div className={styles.cardFlex}>
            <div>
                <h3>MINERAL RESOURCES (OIL & GAS, FUTURE DIVISION):</h3>
                <h3>END-WELL ENERGY</h3>
                <p>
                    <span>Focus:</span> Natural resources exploration, e.g., sand, gold, cement production…etc. 
                </p>
                <p>
                  In line with Nigeria’s energy needs and economic roadmap, End-Well Energy is positioned to enter 
                  the Oil & Gas sector strategically, 
                  starting with downstream activities and gradually evolving towards renewable energy solutions.
                </p>
                <span>PLANNED OPERATIONS (PHASE I):</span>
                <ul>
                    <li>Establishment of fuel retail outlets</li>
                    <li>LPG and CNG distribution</li>
                    <li>Oil storage and transportation infrastructure</li>
                    <li>Modular refinery feasibility studies</li>
                </ul>
                <span>SUSTAINABILITY AGENDA (PHASE II):</span>
                <ul>
                    <li>Solar energy mini-grids in rural communities</li>
                    <li>Waste-to-energy pilot programs</li>
                    <li>Green energy education and awareness campaigns</li>
                </ul>
            </div>
            <div>
                <img src="/images/mineral_two.jpg" alt="image" />
            </div>
        </div>
        <a href="">CLICK TO INVEST</a>
    </div>
  )
}

export default Mineral
