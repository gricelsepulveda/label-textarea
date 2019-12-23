import React, {Component, Fragment} from 'react'
//Components
import Button from '../../components/Button.jsx'
import Input from '../../components/Input.jsx'
import Divider from '../../components/Divider.jsx'
import Textarea from '../../components/Textarea.jsx'
import Alert from '../../components/Alert.jsx'

class HomeContact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            error: "",
            success: ""
        };

        this.contactForm = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })
    }

    // Alert validation parent to child methods
    errorValidation = React.createRef();
    errorSentAlert = React.createRef();
    successSent = React.createRef();

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
                    if (data.success === true) {
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

    showUserOptions = () => {
        let {active} = this.state
        this.setState({active: !active})
    }

    render() {
        return (
            <Fragment>
                <section className='gc-contact' id='contact'>
                    <h2 className='flex row center text-center color-3'>Contáctanos</h2>
                    <Divider/>
                    <div className="flex row center gc-contact-wrapper">
                        <div className='gc-left'>
                            <form className='flex col end gc-form-contact' onSubmit={this.handleSubmit}
                                  ref={this.contactForm}>
                                <div className='flex col start'>
                                    <label>Nombre</label>
                                    <div className='gc-gradient-wrapper input'>
                                        <Input name='name' onChange={this.handleChange} value={this.state.name}/>
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
                                <Button kind='filled' color='gradient' size='lg'>Enviar</Button>
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
                        <div className='gc-right'>
                            <img src="https://s3.amazonaws.com/gc-sitio-web/gc-contact.svg" alt='contact image'/>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default HomeContact