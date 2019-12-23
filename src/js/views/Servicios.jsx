import React, { Fragment } from 'react'

//Scss
import '../../styles/components/button.scss'
import '../../styles/components/divider.scss'
import '../../styles/views/servicios.scss'

//Components
import ScrollAnimation from 'react-animate-on-scroll';
import MetaTags from 'react-meta-tags';
import ReactGA from 'react-ga';

//Partials
import ServiciosAgente from './Servicios/_ServiciosAgente.jsx'
import ServiciosSmsBot from './Servicios/_ServiciosSmsBot.jsx'
import ServiciosSpeechAnalytics from './Servicios/_ServiciosSpeechAnalytics.jsx'
import ServiciosCallToAction from './Servicios/_ServiciosCallToAction.jsx'


function initializeReactGA() {
  ReactGA.initialize('UA-131759844-1');
  ReactGA.pageview('/servicios');
}

const Servicios = props => 
  <Fragment> 

    <MetaTags>
      <title>GoCloud Chile | Servicios</title>
      <meta name="description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="keywords" content="inteligencia artificial, voicebot, agentes conversacionales, chatbots, chat en linea, sms masivo, email, marketing, telecomunicación, bots, click2call, speech analytics"/>
      <meta name="author" content="GoCloud Chile"/>
      <meta name="robots" content="index, follow"/>
      <meta name="revisit-after" content="1 month"/>
      <meta property="og:title" content="GoCloud Chile | Servicios"/>
      <meta property="og:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
      <meta property="og:url" content="http://www.gocloud.ai/servicios"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta property="og:locale" content="es_LA" />
      <meta property="fb:app_id" content="2249869381927903"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@gocloudai"/>
      <meta name="twitter:creator" content="@gocloudai"/>
      <meta name="twitter:title" content="GoCloud Chile | Servicios"/>
      <meta name="twitter:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial."/>
      <meta name="twitter:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>

    </MetaTags>

    <header className='gc-header services'>
      <h6 className='white'>Servicios</h6>
    </header>

    <ScrollAnimation animateIn="zoomIn">
      <ServiciosAgente/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <ServiciosSpeechAnalytics/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <ServiciosSmsBot/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <ServiciosCallToAction/>
    </ScrollAnimation>

  </Fragment>

export default Servicios