import React, { Fragment, Component } from 'react'

//Components
import Button from '../../components/Button.jsx'

class ServiciosCallToAction extends Component {

  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    return (
      <Fragment>
        <section className='gc-services call'>
          <div className='flex col center'>
            <h3 className='text-center'>Comienza hoy a conocer lo que estos servicios de I.A. pueden hacer por tu empresa</h3>
            <a href='/contacto'>
              <Button theme='light' color='gradient' kind='filled' size='xlg'>Contáctanos</Button>
            </a>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default ServiciosCallToAction