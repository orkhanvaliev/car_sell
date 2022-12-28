import React from 'react';
import HeroBackground from './HeroBackground';
import Banner from './Banner'
import { Link } from 'react-router-dom';
import Services from './Services'
import FeaturedCars from './FeaturedCars'


const Home = () => {
  return (

    <>
      <HeroBackground>
        <Banner title="Luxury Azerbaijan" subtitle="Arzu olunan avtomobilini tap">
          <Link to="/cars" className="btn-primary">
            Avtomobillər
        </Link>
        </Banner>
      </HeroBackground>
      <Services />
      <FeaturedCars />
    </>
  )
}



export default Home;