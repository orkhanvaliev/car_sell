import React from 'react'
import HeroBackground from './HeroBackground'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import CarsContainer from './CarsContainer'

const Cars = () => {
  return (
    <>
      <HeroBackground hero="carsHero">
        <Banner title='Avtomobillər'>
          <Link to='/' className="btn-primary">
            Geri Qayıt
        </Link>
        </Banner>
      </HeroBackground>
      <CarsContainer />
    </>
  )
}

export default Cars;