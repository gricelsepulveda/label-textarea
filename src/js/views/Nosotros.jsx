import React, { Fragment } from 'react'

// Styles
import '../../styles/components/divider.scss'
import '../../styles/components/button.scss'
import '../../styles/components/breadcrumb.scss'
import '../../styles/views/nosotros.scss'
import '../../styles/shared/clients.scss'

//Components
import ScrollAnimation from 'react-animate-on-scroll';
import MetaTags from 'react-meta-tags';
import ReactGA from 'react-ga';

// Partials
import NosotrosGrupo from './Nosotros/_NosotrosGrupo.jsx'
import NosotrosEquipo from './Nosotros/_NosotrosEquipo.jsx'

//Shared
import Clients from '../shared/Clients.jsx'

function initializeReactGA() {
  ReactGA.initialize('UA-131759844-1');
  ReactGA.pageview('/nosotros');
}


const Nosotros = props => 
  <Fragment> 

    <MetaTags>
      <title>GoCloud Chile | Nosotros</title>
      <meta name="description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="keywords" content="inteligencia artificial, voicebot, agentes conversacionales, chatbots, chat en linea, sms masivo, email, marketing, telecomunicación, bots, click2call, speech analytics"/>
      <meta name="author" content="GoCloud Chile"/>
      <meta name="robots" content="index, follow"/>
      <meta name="revisit-after" content="1 month"/>
      <meta property="og:title" content="GoCloud Chile | Nosotros"/>
      <meta property="og:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
      <meta property="og:url" content="http://www.gocloud.ai/nosotros"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@gocloudai"/>
      <meta name="twitter:creator" content="@gocloudai"/>
      <meta name="twitter:title" content="GoCloud Chile | Nosotros"/>
      <meta name="twitter:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial."/>
      <meta name="twitter:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
    </MetaTags>

    <header className='gc-header nosotros'>
      <h6 className='white'>Quiénes somos</h6>
    </header>

    <ScrollAnimation animateIn="zoomIn">
      <NosotrosGrupo/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <NosotrosEquipo/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="zoomIn">
      <Clients/>
    </ScrollAnimation>

  </Fragment>

export default Nosotros