import styles from './Divisions.module.css';

const Agric = () => {
  return (
    <div className={`${styles.card} ${styles.agric}`}>
        <div className={styles.cardFlex}>
            <div>
                <h3>INDDUSTRIES:</h3>
                
                <h3>(a) AGRICULTURAL BUSINESS: END-WELL AGRICARE</h3>
                <p>
                    <span>Focus:</span> Integrated Food Value Chain Development 
                </p>
                <p>
                    End-Well AgriCare aims to boost food security and economic empowerment by 
                    operating along the entire agricultural value chain—from production to processing and distribution.
                </p>
                <span>Key Initiatives:</span>
                <ul>
                    <li>Commercial crop farming (cassava, maize, rice, soyabean)</li>
                    <li>Palm, plantain, Cashew, Cocoa Plantations</li>
                    <li>Fish farming and poultry</li>
                    <li>Agro-processing (packaging, preservation, value-added products)</li>
                    <li>Out-grower programs to support smallholder farmers</li>
                    <li>Mechanization services and agritech solutions</li>
                </ul>
                <span>Future Growth Plan:</span>
                <ul>
                    <li>Climate-smart agriculture training hubs</li>
                    <li>Climate-smart agriculture training hubs</li>
                    <li>Agri-fintech tools for micro-loans and insurance</li>
                </ul>
                <h3>(b) FASHION & SHOES BUSINESS: END-WELL FASHSHOCARE</h3>
                <h3>(c) TEXTILE BUSINESS: END-WELL TEXCARE</h3>
                <h3>(d) WATER & NATURAL JUICE BUSINESS: END-WELL FOODCARE</h3>
            </div>
            <div>
              <img src="/images/agricare.jpg" alt="" />
            </div>
        </div>
        <a href="">CLICK TO INVEST</a>
    </div>
  )
}

export default Agric
