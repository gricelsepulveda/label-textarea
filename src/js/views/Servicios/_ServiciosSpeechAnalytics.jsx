import React, { Fragment, Component } from 'react'

//Components
import Divider from '../../components/Divider.jsx'

class ServiciosSpeechAnalytics extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Fragment>
        <section className='gc-services second'>
          <div className='flex row center'>
            <div className='gc-left'>
              <img src="https://s3.amazonaws.com/gc-sitio-web/gc-conversational.svg"/> 
            </div>
            <div className='gc-right'>
              <h5 className='flex row start color-3'>Speech Analytics</h5>
              <p color='color-7'>
              Integra Inteligencia Artificial a tus procesos de análisis y comienza a saber qué hacen tus ejecutivos al contestar las llamadas de tus clientes. Speech Analytics permite analizar utilizando tecnología STT para realizar transcripciones de las grabaciones y obtener de ellas información relevante.
              <br/><br/>
              Con Speech Analytics puedes saber información de tus grabaciones como la duración de las llamadas, separarlas por ejecutivos, medir los silencios, buscar palabras claves, revisar si los ejecutivos siguen el script, separación demográfica, medición de efectividad y análisis de sentimientos.
              <br/><br/>
              Es posible integrar Speech Analytics de forma directa a través de nuestra API o subir los audios y metadata a través de nuestro administrador, una vez ahí nuestro motor STT procesa cerca de 1000 segundos de audio en menos de un minuto permitiendo visualizar la información a medida que se sube.
              
              </p>
            </div>
          </div>
          <Divider/>
        </section>
      </Fragment>
    )
  }
}

export default ServiciosSpeechAnalytics