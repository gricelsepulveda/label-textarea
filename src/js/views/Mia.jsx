import React, { Fragment } from 'react'

//scss 
import '../../styles/components/button.scss'
import '../../styles/components/input.scss'
import '../../styles/components/breadcrumb.scss'
import '../../styles/components/textarea.scss'
import '../../styles/components/divider.scss'
import '../../styles/views/mia.scss'

//Components
import ScrollAnimation from 'react-animate-on-scroll'
import MetaTags from 'react-meta-tags';
import ReactGA from 'react-ga';

//components
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import Textarea from '../components/Textarea.jsx'
import Divider from '../components/Divider.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'

function initializeReactGA() {
  ReactGA.initialize('UA-131759844-1');
  ReactGA.pageview('/mia');
}

const Mia = props => 
  <Fragment> 

    <MetaTags>
      <title>Mia - GoCloud Chile | Mia</title>
      <meta name="description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="keywords" content="inteligencia artificial, voicebot, agentes conversacionales, chatbots, chat en linea, sms masivo, email, marketing, telecomunicación, bots, click2call, speech analytics"/>
      <meta name="author" content="GoCloud Chile"/>
      <meta name="robots" content="index, follow"/>
      <meta name="revisit-after" content="1 month"/>
      <meta property="og:title" content="GoCloud Chile | Mia"/>
      <meta property="og:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
      <meta property="og:url" content="http://www.gocloud.ai/nosotros"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@gocloudai"/>
      <meta name="twitter:creator" content="@gocloudai"/>
      <meta name="twitter:title" content="GoCloud Chile | Mia"/>
      <meta name="twitter:description" content="Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial."/>
      <meta name="twitter:image" content="https://s3.amazonaws.com/gc-sitio-web/gc-share-image.png"/>
    </MetaTags>

    <header className='gc-header mia'>
      <h6 className='white'>Mia</h6>
    </header>

    <ScrollAnimation animateIn="zoomIn">
      <section className='gc-contact'>
          <Breadcrumb currentScreen='Mia'/>
          <div className='flex row center'>
              <div className='gc-right'>
                  <form className='flex col end gc-form-contact'>
                      <div className='flex col center'>
                          <label className='flex row center'>Teléfono a discar:</label>
                          <div className='gc-gradient-wrapper input'>
                              <Input name='name' id='name' placeholder="Ej: 934082419"/>
                          </div>
                          <label className='flex row center' style={{marginTop: "20px"}}>Script de llamado:</label>
                          <div className="gc-gradient-wrapper input selectmia">
                            <div className="gc-select">
                              <select>
                                <option selected disabled>Selecciona un script</option>
                                <option>Cobranza Cpech</option>
                                <option>Cobranza Itaú</option>
                                <option>Cobranza Santander</option>
                                <option>Cobranza Costanera Norte</option>
                              </select>
                            </div>
                          </div>
                      </div>
                      <div className='flex col center'>
                        <Button kind='filled' type="button" color='gradient' theme='light' size='xlg'>Llamar</Button>
                      </div>
                  </form>
              </div>
          </div>
          <Divider/>
      </section>
    </ScrollAnimation>
  </Fragment>

export default Mia