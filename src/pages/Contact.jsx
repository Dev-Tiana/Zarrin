import React from 'react'
import Heading2 from "../components/Heading2"
import Contactcard from '../components/Contactcard'
import map from '../assets/map.png'
import Contactform from '../components/Contactform'

const Contact = () => {
  return (
    <div>
        <Heading2 
        //   welcome="Get in Touch"
          head="Get in Touch"
          body="Contact us to publish your content and show ads to our website and get a good reach."
          />
          <Contactcard />
          <div>
          <img src={map} alt="" />
          <Contactform />
          </div>
    </div>
  )
}

export default Contact