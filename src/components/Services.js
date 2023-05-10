import React from 'react'
import Title from './Title'
import { services } from '../data';
import Service from './Service';

const Services = () => {
  console.log(services);
  return (
    <section className="section services" id="services">
    <Title 
      title="our"
      subTitle="services"
    />

    <div className="section-center services-center">
    {services.map((props, index) => {
      return (
      <Service {...props} key={index} />
        )
    })}
    </div>
  </section>
  )
}

export default Services