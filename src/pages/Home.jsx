import { useEffect } from "react";
import About from "../components/home/About";
import HomeHeader from "../components/home/HomeHeader";
import Investment from "../components/home/Investment";
import Packages from "../components/home/Packages";
import Vision from "../components/home/Vision";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  
    useEffect(() => {
      AOS.init({
        duration: 1200,
        once: false,
        mirror: true,
      });
    }, []);

  return (
   <div>
      <HomeHeader />
      <Vision />
      <Investment />
      <Packages />
      <About />
   </div>
  )
}

export default Home
