import React, {Component, Fragment} from 'react'
//components
import Button from '../../components/Button.jsx'
import Input from '../../components/Input.jsx'
import Textarea from '../../components/Textarea.jsx'
import Divider from '../../components/Divider.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx';
import Alert from '../../components/Alert.jsx'

class ContactoForm extends Component {
    // Alert validation parent to child methods
    errorValidation = React.createRef();
    errorSentAlert = React.createRef();
    successSent = React.createRef();

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            message: "",
            error: "",
            success: ""
        }

        this.contactForm = React.createRef();
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })
    }

    openErrorValidation = () => {
        this.errorValidation.current.openAlert()
    }
    closeErrorValidation = () => {
        this.errorValidation.current.closeAlert()
    }
    openErrorSentAlert = () => {
        this.errorSentAlert.current.openAlert()
    }
    closeErrorSentAlert = () => {
        this.errorSentAlert.current.closeAlert()
    }
    openSuccessSentAlert = () => {
        this.successSent.current.openAlert()
    }
    closeSuccessSentAlert = () => {
        this.successSent.current.closeAlert()
    }

    handleSubmit(event) {

        event.preventDefault();

        let formData = {
            nombre: this.state.name,
            correo: this.state.email,
            mensaje: this.state.message
        }

        //Validation email value
        const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validateEmail = emailCheck.test(formData.correo)

        //Validation empty values
        let areEmptyEntries = false
        Object.values(formData).forEach(
            (value) => {
                if (!areEmptyEntries) {
                    areEmptyEntries = (value === "")
                }
            }
        )
        if (areEmptyEntries === true) {
            this.openErrorValidation()
            setTimeout(() => {
                this.closeErrorValidation()
            }, 3000)

            return this.setState({error: "Llena todos los campos primero"})
        }

        if (validateEmail === false) {
            this.openErrorValidation()
            setTimeout(() => {
                this.closeErrorValidation()
            }, 3000)

            return this.setState({error: "Oops! Eso no parece ser un correo válido"})
        }

        //Api connection
        if (this.state.error === "") {
            fetch('https://api.gocloud.ai/website/contact', {
                method: 'POST',
                mode: "cors",
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.correo,
                    name: formData.nombre,
                    message: formData.phone
                })
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.success == true) {
                        this.openSuccessSentAlert()
                        setTimeout(() => {
                            this.closeSuccessSentAlert()
                        }, 3000)
                        return this.setState({success: true, name: '', email: '', message: '', error: ''})
                    } else {
                        this.openErrorSentAlert()
                        setTimeout(() => {
                            this.closeErrorSentAlert()
                        }, 3000)
                        return this.setState({
                            success: false,
                            error: 'Hubo un problema al enviar tu mensaje, porfavor escríbenos un correo a info@gocloud.ai'
                        })
                    }
                })
                .catch((err) => console.log(err))
        }

        this.setState({error: ""})

    }

    render() {
        return (
            <Fragment>
                <section className='gc-contact'>
                    <Breadcrumb currentScreen='Contacto'/>
                    <div className='flex row center'>
                        <div className='gc-left'>
                            <article className='flex col center gc-contact-info'>
                                <div className='flex row center gc-wrapper-sides'>

                                    <div className='flex col start'>
                                        <figure className='gc-figure-a'></figure>
                                        <p>También puedes llamarnos</p>
                                        <div className='flex col start'>
                                            <span>Santiago</span>
                                            <a href='tel:+56228405600'>+562 2840 5600</a>
                                        </div>
                                        <div className='flex col start'>
                                            <span>Lima</span>
                                            <a href='tel:+5117097896'>+51 1709 7896</a>
                                        </div>
                                        <div className='flex col start'>
                                            <span>Buenos Aires</span>
                                            <a href='tel:+541159845932'>+54 11 5984 5932</a>
                                        </div>
                                    </div>

                                    <div className='flex col start'>
                                        <figure className='gc-figure-b'></figure>
                                        <p>O visita nuestra oficina</p>
                                        <a href='https://goo.gl/maps/tGJsxxQzTRz' target='_blank'>Alonso de Córdova
                                            5870, Las Condes. Santiago</a>
                                    </div>
                                </div>

                            </article>
                        </div>
                        <div className='gc-right'>
                            <form className='flex col end gc-form-contact' onSubmit={this.handleSubmit}
                                  ref={this.contactForm}>
                                <div className='flex col start'>
                                    <label>Nombre</label>
                                    <div className='gc-gradient-wrapper input'>
                                        <Input name='name' id='name' onChange={this.handleChange}
                                               value={this.state.name}/>
                                    </div>
                                </div>
                                <div className='flex col start'>
                                    <label>Correo electrónico</label>
                                    <div className='gc-gradient-wrapper input'>
                                        <Input name='email' id='email' onChange={this.handleChange}
                                               value={this.state.email}/>
                                    </div>
                                </div>
                                <div className='flex col start'>
                                    <label>Mensaje</label>
                                    <div className='gc-gradient-wrapper textarea'>
                                        <Textarea name='message' id='message' onChange={this.handleChange}
                                                  value={this.state.message}/>
                                    </div>
                                </div>
                                <Button kind='filled' color='gradient' theme='light' size='xlg'>Enviar</Button>
                            </form>

                            <Alert ref={this.errorValidation} kind='error' size='sm'>
                                <p>{(this.state.error !== false || this.state.error !== '') ? `${this.state.error}` : ``} </p>
                            </Alert>

                            <Alert ref={this.successSent} kind='success' size='sm'>
                                <p>¡Mensaje enviado! Te responderemos en breve</p>
                            </Alert>

                            <Alert ref={this.errorSentAlert} kind='error' size='sm'>
                                <p>{this.state.error}</p>
                            </Alert>

                        </div>
                    </div>
                    <Divider/>
                </section>
            </Fragment>
        )
    }
}

export default ContactoForm