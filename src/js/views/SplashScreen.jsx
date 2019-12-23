import React, { Fragment } from 'react'
import logo from '../../assets/img/gocloud-logo.png'

const SplashScreen = props => 
  <Fragment>
    <img className='gc-gocloud-logo' src={logo}/>
    <h1 className='text-center'>
      Tenemos las mejores<br/>
      herramientas I. A.<br/>
      para tu empresa
    </h1>
    <p className='text-center'>Contáctanos a <a href="mailto:admin@gocloud.ai">admin@gocloud.ai</a></p>
    <div className='flex row center gc-social'>
      <a className='gc-social-link fb' target='_blank' href='https://www.facebook.com/gocloudcl'></a>
      <a className='gc-social-link tw' target='_blank' href='http://twitter.com/gocloudai'></a>
      <a className='gc-social-link li' target='_blank' href='https://www.linkedin.com/company/go-cloud/about/'></a>
    </div>
    <p className='flex row center gc-phone-band'>
      <span>Santiago:<a href='tel:+56228405600'>+56 22840 5600</a></span>
      <span>Lima:<a href='tel:+5117097896'>+51 1709 7896</a></span>
      <span>Buenos Aires:<a href='tel:+561159845932'>+54 11 5984 5932</a></span>
      <span className='gc-direction text-center'><a href='https://goo.gl/maps/tGJsxxQzTRz' target='_blank'>Alonso de Córdova 5870 Of. 1820, Las Condes. Santiago</a></span>
    </p>
  </Fragment>

export default SplashScreen