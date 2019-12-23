import React, {Fragment} from 'react'

//Components
import Divider from '../../components/Divider.jsx'
import Button from '../../components/Button.jsx'

const HomeServices = props =>
    <Fragment>
        <section className='gc-services'>
            <h2 className='flex row center text-center color-3'>Nuestros servicios</h2>
            <Divider/>
            <div className="flex row center">
                <article className='gc-service-article flex col center'>
                    <img src="https://s3.amazonaws.com/gc-sitio-web/gc-mia-icon.svg"/>
                    <h3 className="color-6">Mia</h3>
                    <p className='text-center stretch'>
                        Ejecutivo virtual que permite realizar llamadas Inbound y Outbound aprendiendo de las
                        conversaciones con los clientes.
                    </p>
                    <a href='/servicios'>
                        <Button type='button' kind='filled' color='normal' theme='light' size='lg'>Leer más</Button>
                    </a>
                </article>
                <article className='gc-service-article flex col center'>
                    <img src="https://s3.amazonaws.com/gc-sitio-web/gc-speech-icon.svg"/>
                    <h3 className="color-6">Speech Analytics</h3>
                    <p className='text-center stretch'>
                        Plataforma que transforma grabaciones en texto, permitiendo realizar análisis de las
                        transcripciones en base a parámetros pre-establecidos.
                    </p>
                    <a href='/servicios'>
                        <Button type='button' kind='filled' color='normal' theme='light' size='lg'>Leer más</Button>
                    </a>
                </article>
                <article className='gc-service-article flex col center'>
                    <img src="https://s3.amazonaws.com/gc-sitio-web/gc-smspro-icon.svg"/>
                    <h3 className="color-6">Sms Bot</h3>
                    <p className='text-center stretch'>
                        Plataforma para el envío masivo de SMS que permite, entre otras cosas, integrar funcionalidades
                        de Click2Link, Click2Call y Click2File.
                    </p>
                    <a href='/servicios'>
                        <Button type='button' kind='filled' color='normal' theme='light' size='lg'>Leer más</Button>
                    </a>
                </article>
            </div>
        </section>
    </Fragment>

export default HomeServices