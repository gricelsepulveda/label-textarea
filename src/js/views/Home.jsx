import React, { Fragment } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MetaTags from 'react-meta-tags';

//scss
import '../../styles/shared/clients.scss'
import '../../styles/views/home.scss'
import '../../styles/components/button.scss'
import '../../styles/components/input.scss'
import '../../styles/components/divider.scss'
import '../../styles/components/textarea.scss'
import '../../styles/components/background.less'


//components
import Button from '../components/Button.jsx'
import ScrollAnimation from 'react-animate-on-scroll'
import Background from '../components/Background.jsx'
import ReactGA from 'react-ga';

//Partials
import HomeContact from '../views/Home/_HomeContact.jsx'
import HomeServices from '../views/Home/_HomeServices.jsx'
import HomeWelcome from '../views/Home/_HomeWelcome.jsx'

//Shared
import Clients from '../shared/Clients.jsx'

function initializeReactGA() {
  ReactGA.initialize('UA-131759844-1');
  ReactGA.pageview('/home');
}

const Home = props => 
  <Fragment>
    

    <MetaTags>
      <title>GoCloud Chile | Sistemas Integrales de Inteligencia Artificial</title>
      <meta name="description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="keywords" content="inteligencia artificial, voicebot, agentes conversacionales, chatbots, chat en linea, sms masivo, email, marketing, telecomunicación, bots, click2call, speech analytics"/>
      <meta name="author" content="GoCloud Chile"/>
      <meta name="robots" content="index, follow"/>
      <meta name="revisit-after" content="1 month"/>
      <meta property="og:title" content="GoCloud Chile | Sistemas Integrales de Inteligencia Artificial"/>
      <meta property="og:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
      <meta property="og:url" content="http://www.gocloud.ai"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@gocloudai"/>
      <meta name="twitter:creator" content="@gocloudai"/>
      <meta name="twitter:title" content="GoCloud Chile | Sistemas Integrales de Inteligencia Artificial"/>
      <meta name="twitter:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial."/>
      <meta name="twitter:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
    </MetaTags>

    <section className='gc-hero'>
      <Background/>
      <div className='gc-left flex col start'>
        <h1 className='white'>Tenemos las mejores<br/>herramientas A.I.<br/>para tu empresa</h1>
        <AnchorLink href='#contact'>
          <Button theme='light' color='highlight' kind='filled' size='xlg'>Contáctanos</Button>
        </AnchorLink>
      </div>
      <div className='flex col center gc-right'>
        <img src="https://s3.amazonaws.com/gc-sitio-web/gc-hero.svg" />
      </div>
    </section>

    <ScrollAnimation animateIn="zoomIn">
      <HomeWelcome/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <HomeServices/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <Clients/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <HomeContact/>
    </ScrollAnimation>

  </Fragment>

export default Home