import React from 'react';
import './AboutPage.scss'

import AboutIntro from '../../components/About/AboutIntro';
import FounderInfo from '../../components/About/FounderInfo';
import AboutImage from '../../components/About/AboutImage';
import AboutFooter from '../../components/About/AboutFooter';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <AboutIntro />
      <FounderInfo />
      <AboutImage />
      <AboutFooter />
    </div>
  )
}

export default AboutPage