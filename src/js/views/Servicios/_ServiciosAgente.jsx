import React, { Fragment } from 'react'

//Components
import Breadcrumb from '../../components/Breadcrumb.jsx'
import Divider from '../../components/Divider.jsx'

const ServiciosAgente = props => 
  <Fragment> 
    <section className='gc-services first'>
      <Breadcrumb currentScreen='Servicios'/>
      <div className='flex row center'>
        <div className='gc-left'>
          <h5 className='flex row start color-3'>MIA</h5>
          <p color='color-7'>
            Únete a la eficiencia de las máquinas! Junto a M.I.A (Máquina de Inteligencia Artificial), podrás realizar más de 150 llamadas por minuto, tanto Inbound como Outbound. A través de nuestro motor de Procesamiento de Lenguaje Natural, patentado y de desarrollo interno de la empresa, somos capaces de mantener conversación en tiempo real con usuarios, siguiendo flujos conversacionales, árboles de decisiones y captura de información al instante.
            <br/><br/>
            Conecta MIA para realizar cobranzas administrativas, preventivas, ventas de productos, encuestas telefónicas, agendamiento de horas o lo que tu empresa necesite. Junto a nuestro equipo de lingüistas,  realizamos la construcción de los scripts y flujos conversacionales que mejor se adapten a tus necesidades e implementamos diferentes voces sintéticas y/o fonéticas.
            <br/><br/>
            Integra MIA a tu central telefónica PBX o PSTN y comienza a recibir reportes diarios con la cantidad de llamadas, sesiones, llamadas contestadas, comportamiento de usuarios e integralo con nuestra Plataforma Speech Analytics para profundizar aún más en la forma en la que tus usuarios contestan tus llamados.
          </p>
        </div>
        <div className='gc-right'>
          <img src="https://s3.amazonaws.com/gc-sitio-web/gc-services.svg"/> 
        </div>
      </div>
      <Divider/>
    </section>
  </Fragment>

export default ServiciosAgente