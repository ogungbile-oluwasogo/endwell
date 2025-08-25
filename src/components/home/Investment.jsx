import styles from './Investment.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import 'swiper/css';
import "swiper/css/navigation";
import SubInvestment from './SubInvestment';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Investment = () => {

const isDesktop = useMediaQuery({ maxWidth: 1200 });
const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <div className={styles.container}>
        <h1 data-aos="fade-up" data-aos-delay="500">EWIHL INVESTMENTS</h1>
        {isMobile ? <SubInvestment /> :
        
        <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={`${isDesktop ? -25 : -40}`}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        speed={800}
        slidesPerView={`${isDesktop ? 2 : 3}`}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        data-aos="fade-up" data-aos-delay="700">
            <SwiperSlide>
                <div className={`${styles.realtors} ${styles.card}`}>
                    <h2>REAL ESTATE: <br />END-WELL REALTORS</h2>
                    <img src="/images/realtors.jpg" alt="" />
                    <p>
                        Focus: Student Hostel Development (PBSA - Purpose-Built Student Accommodation)
                        End Well Realtors is the fulcrum of our real estate operations. A platform to address student 
                        housing facility which will be affordable, secured and void of any immoral operations had been envisioned and 
                        shall be put in place. 
                        Our plan is to build state of the art hostels near or inside tertiary institutions across the country.
                    </p>
                    <Link to='investments'>VIEW IINVESTMENT</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.agricare} ${styles.card}`}>
                    <h2>INDUSTRIES: <br />AGRICULTURAL: END-WELL AGRICARE</h2>
                    <img src="/images/agricare.jpg" alt="" />
                    <p>
                        Focus: Integrated Food Value Chain Development
                        End-Well AgriCare aims to boost food security and economic empowerment by
                        operating along the entire agricultural value chain—from production to processing 
                        and distribution.
                    </p>
                    <Link to='investments'>VIEW IINVESTMENT</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.healthcare} ${styles.card}`}>
                    <h2>HEALTHCARE: <br />END-WELL MEDICARE</h2>
                    <img src="/images/healthcare.jpg" alt="" />
                    <p>
                        Focus: Community-Oriented, Preventive and Primary Healthcare
                        At End-Well MediCare, our healthcare investments aim to close the accessibility & 
                        affordability gaps in medical services by targeting underserved and semi-urban populations.
                    </p>
                    <Link to='investments'>VIEW IINVESTMENT</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.education} ${styles.card}`}>
                    <h2>EDUCATION: <br />END-WELL EDUCARE</h2>
                    <img src="/images/education.jpg" alt="" />
                    <p>
                        Focus: Inclusive, Affordable, and Tech-Driven Education
                        End Well-EduCare is committed to enhancing educational access and quality, equipping young 
                        Africans with 21st-century skills through innovative, inclusive solutions.
                    </p>
                    <Link to='investments'>VIEW IINVESTMENT</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.mineral} ${styles.card}`}>
                    <h2>MINERAL RESOURCES (OIL & GAS, FUTURE <br /> DIVISION): END-WELL ENERGY</h2>
                    <img src="/images/mineral.jpg" alt="" />
                    <p>
                        Focus: Natural resources exploration, e.g., sand, gold, cement production…etc.
                        Downstream Operations & Future Renewable Energy Transition
                        In line with Nigeria's energy needs and economic roadmap, End-Well Energy is positioned to enter the
                        Oil & Gas sector strategically, 
                        starting with downstream activities and gradually evolving towards renewable energy solutions.
                    </p>
                    <Link to='investments'>VIEW IINVESTMENT</Link>
                </div>
            </SwiperSlide>
        </Swiper>
        }
        {/* <SubInvestment /> */}
    </div>
  )
}

export default Investment
