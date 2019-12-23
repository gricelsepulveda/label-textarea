import React, { Fragment } from 'react'

//components
import Divider from '../../components/Divider.jsx'

const NosotrosEquipo = props => 
  <Fragment>
    <section className='gc-team flex col center'>
      <h2 className='flex row center text-center color-3'>Nuestro Equipo</h2>
      <Divider/>
      <div className='gc-team-wrapper flex row center'>
        <article className='gc-team-member pat'>
          <div className='gc-member-description'>
            <h6>Patricio Cornejo</h6>
            <p>Gerente de Desarrollo</p>
            <a href='https://www.linkedin.com/in/patcornejo/' target='_blank' className='gc-linkedin'></a>
          </div>
        </article>s
        <article className='gc-team-member agus'>
          <div className='gc-member-description'>
            <h6>Agustin Gonzalez</h6>
            <p>Dev Team Lead - Full Stack Developer</p>
            <a href='https://www.linkedin.com/in/agust%C3%ADn-gonz%C3%A1lez-mur%C3%BAa-b6180798/' target='_blank' className='gc-linkedin'></a>
          </div>
        </article>
        <article className='gc-team-member gricel'>
          <div className='gc-member-description'>
            <h6>Gricel Sepulveda</h6>
            <p>UX Team Lead - Front end Developer</p>
            <a href='https://www.linkedin.com/in/gricel-sep%C3%BAlveda-30b0a089/' target='_blank' className='gc-linkedin'></a>
          </div>
        </article>
        <article className='gc-team-member caro'>
          <div className='gc-member-description'>
            <h6>Carolina Da Silva</h6>
            <p>Full Stack Developer</p>
            <a href='https://www.linkedin.com/in/carolina-da-silva-hernandez/' target='_blank' className='gc-linkedin'></a>
          </div>
        </article>
        <article className='gc-team-member javi'>
          <div className='gc-member-description'>
            <h6>Javiera B Olivares</h6>
            <p>UX Designer</p>
            <a href='https://www.linkedin.com/in/javiera-b-olivares-11603413a/' target='_blank' className='gc-linkedin'></a>
          </div>
        </article>
      </div>
    </section>
  </Fragment>

export default NosotrosEquipo