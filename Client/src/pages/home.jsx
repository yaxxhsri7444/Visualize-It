import React from 'react'
import Header from '../components/header'
import Step from '../components/step'
import Description from '../components/Discription'
import Testimonial from '../components/testimonial'
import GenrateBtn from '../components/GenrateBtn'


const Home = () => {
  return (
    <div>
      <Header />
      <Step />
      <Description />
      <Testimonial/> 
      <GenrateBtn />
    </div>
  )
}

export default Home
