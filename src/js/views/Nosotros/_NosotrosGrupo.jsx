import React, { Fragment } from 'react'

//components
import Divider from '../../components/Divider.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'

const NosotrosGrupo = props => 
  <Fragment>
    <section className='gc-gocloud-group'>
      <Breadcrumb currentScreen='Grupo GoCloud'/>
      <div className='flex row center'>
        <div className='gc-left'>
          <h5 className='flex row start text-center color-3'>Nosotros</h5>
          <p color='color-7'>
          Está compuesto de 3 unidades de negocio donde el foco y el punto de intersección de las tres es el apalancamiento de recursos a través de tecnología de inteligencia artificial.  Nuestras tres unidades son: Implementación y Desarrollo de Plataformas Omnicanal con Inteligencia Artificial, Servicios de Telecomunicaciones, y la tercera es Servicios de Call y Contact Center. Esta estructura de integración vertical tanto hacia adelante como hacia atrás nos ha permitido almacenar y acumular know how de forma permanente y de ésta forma levantar e implementar oportunidades de mejora en nuestras soluciones y servicios.<br/><br/>
          Sumamos más de 30 años de experiencia en telecomunicaciones y desarrollo de tecnologías.
          Expertos en la implementación de soluciones en telecomunicaciones, marketing, desarrollo de plataformas e Inteligencia Artificial.<br/><br/>
          Millones de usuarios conectados a través de nuestras soluciones.<br/><br/>
          Generamos puentes de comunicaciones para que las marcas lleguen de manera eficiente hacia sus usuarios
          </p>
        </div>
        <div className='gc-right'>
          <img src="https://s3.amazonaws.com/gc-sitio-web/gc-gocloud-group.svg"/> 
        </div>
      </div>
      <Divider/>
    </section>
  </Fragment>

export default NosotrosGrupo