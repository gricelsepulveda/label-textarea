import React, { Fragment } from 'react'

//Components
import Divider from '../../components/Divider.jsx'

const ServiciosSmsBot = props => 
  <Fragment>
    <section className='gc-services third'>
      <div className='flex row center'>
        <div className='gc-left'>
          <h5 className='flex row start color-3'>SMS Bot</h5>
          <p color='color-7'>
          Acelera tu marketing móvil y la comunicación con tus usuarios, envía hasta 100000 SMS por hora a través una plataforma fácil y segura de utilizar. Hoy en día el 98% de los SMS son revisados y sigue siendo el medio de comunicación más directo con los usuarios además de la integraciones que es posible realizar con su Smartphone.
          <br/><br/>
          SMS Pro te permite crear SMS, visualizarlos antes de enviar e incluso solicitar doble firma para evitar errores. Integra alguna de las funcionalidades, tales como Click2Link para insertar links cortos personalizados y abrir páginas web, landing page, aplicaciones móviles y descargar aplicaciones. Click2Call te permitirá insertar links cortos para activar llamadas desde el celular del usuario hacia una central telefónica o MIA, aunque también lo puedes activar para que el usuario solicite la llamada y sea un ejecutivo o MIA el que llame. Click2File, por último, te permite descargar documentos como pdf para visualizarlos que pueden ser utilizados en facturas o avisos. En general, pues activar diferentes triggers utilizables para abrir Whatsapp, chat en lineas, aplicaciones, etc.
          <br/><br/>
          El administrador te permite visualizar el estado completo de tu campaña, analizar enviados, entregados y clicks realizado a los link cortos. Así también, puedes revisar la reportería diaria, por campaña o por usuario lo que te entregará el estado completo de tu campaña y de la efectividad de tu lista de contactos.
          
          </p>
        </div>
        <div className='gc-right'>
          <img src="https://s3.amazonaws.com/gc-sitio-web/gc-sms.svg"/> 
        </div>
      </div>
      <Divider/>
    </section>
  </Fragment>

export default ServiciosSmsBot