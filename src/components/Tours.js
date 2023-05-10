import React from 'react'
import Title from './Title'
import { tours } from '../data.js'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title 
      title="Featured"
      subTitle="Tours"
    />
    <div className="section-center featured-center">
      {tours.map((props) => {
        return (
          <Tour key={props.id} {...props} />
        )
      } )}
    
    </div>
  </section>
  )
}

export default Tours