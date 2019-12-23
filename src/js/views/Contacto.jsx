import React, { Fragment } from 'react'

//scss 
import '../../styles/components/button.scss'
import '../../styles/components/input.scss'
import '../../styles/components/breadcrumb.scss'
import '../../styles/components/textarea.scss'
import '../../styles/components/divider.scss'
import '../../styles/views/contacto.scss'

//Components
import ScrollAnimation from 'react-animate-on-scroll';
import MetaTags from 'react-meta-tags';
import ReactGA from 'react-ga';

//partials
import ContactoForm from './Contacto/_ContactoForm.jsx';

function initializeReactGA() {
  ReactGA.initialize('UA-131759844-1');
  ReactGA.pageview('/contacto');
}

const Contacto = props => 
  <Fragment> 

    <MetaTags>
      <title>Contacto - GoCloud Chile | Contacto</title>
      <meta name="description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="keywords" content="inteligencia artificial, voicebot, agentes conversacionales, chatbots, chat en linea, sms masivo, email, marketing, telecomunicación, bots, click2call, speech analytics"/>
      <meta name="author" content="GoCloud Chile"/>
      <meta name="robots" content="index, follow"/>
      <meta name="revisit-after" content="1 month"/>
      <meta property="og:title" content="GoCloud Chile | Contacto"/>
      <meta property="og:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
      <meta property="og:url" content="http://www.gocloud.ai/nosotros"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@gocloudai"/>
      <meta name="twitter:creator" content="@gocloudai"/>
      <meta name="twitter:title" content="GoCloud Chile | Contacto"/>
      <meta name="twitter:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial."/>
      <meta name="twitter:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
    </MetaTags>

    <header className='gc-header contacto'>
      <h6 className='white'>Contáctanos</h6>
    </header>

    <ScrollAnimation animateIn="zoomIn">
      <ContactoForm/>
    </ScrollAnimation>

  </Fragment>

export default Contacto