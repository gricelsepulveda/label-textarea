import React, {Fragment} from 'react'

//Components
import Divider from '../../components/Divider.jsx'

const HomeWelcome = props =>
    <Fragment>
        <section className='gc-welcome'>
            <h2 className='flex row center text-center color-3'>Bienvenido a la era Cognitiva</h2>
            <Divider/>
            <div className='flex row center'>
                <div className='gc-left'>
                    <img src="https://s3.amazonaws.com/gc-sitio-web/gc-welcome.svg"/>
                </div>
                <div className='gc-right'>
                    <p color='color-7'>
                        Tan sólo en Latinoamérica durante el 2018 se automatizó el 32% de las posiciones en Servicio al
                        Cliente, el 1.3% de las ventas fueron realizadas por chatbots y se realizaron más de 100
                        millones de llamadas por mes utilizando sistemas de conversación automatizadas. En GoCloud nos
                        dedicamos al desarrollo de plataformas que integran componentes de Inteligencia Artificial,
                        creando experiencias únicas enfocadas al Servicio al Cliente, Marketing y Ventas. Ya sea enviar
                        SMS masivos, realizar llamadas de cobranza, analizar audios de la empresa o integrar sistemas de
                        Omnicanalidad con Twitter, Facebook Messenger y Whatsapp, con nosotros podrás realizarlo de
                        forma rápida y segura con reportería en tiempo real y a través de un equipo de expertos con más
                        de 30 años de experiencia en el área.
                    </p>
                </div>
            </div>
        </section>
    </Fragment>

export default HomeWelcome