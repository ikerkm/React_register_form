import React, {
    component
} from 'react';
import './register.css';
class Register extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            pass_conf: '',
            error_form: '',
            error_name: '',
            error_mail: '',
            error_pass: '',
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.pass]: e.target.value,
            [e.target.pass_conf]: e.target.value,
        })

    }
    sacar_datos() {
        console.log(this.state.pass);
        console.log(this.state.pass_conf);
        if (!this.state.name || !this.state.email || !this.state.pass || !this.state.pass_conf) {
            this.setState({
                error_form: "Completa todo los campos."

            })

        } else {
            this.setState({
                error_form: ""

            })





        }

        if (this.state.pass === this.state.pass_conf) {
            console.log('Hey!')
            this.setState({
                error_pass: ""

            })



        } else {
            this.setState({

                error_pass: "La contraseña no coincide"
            })


        }



        if (this.state.name.length > 2) {
            this.setState({

                error_name: ""
            })

        } else {
            this.setState({

                error_name: "El nombre debe de tener al menos 3 caracteres"
            })
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        console.log(re.test(String(this.state.email).toLowerCase()));
        if (re.test(String(this.state.email).toLowerCase())) {
            this.setState({

                error_email: ""
            })
        } else {
            this.setState({
                error_email: "Introduce email valido"

            })


        }



    }

    render() {

        return (

            <div className="register_div">
                <form className="the_former">
                    <span>{this.state.error_form}</span>
                    <text>Nombre</text> <input name="name" ref="name" type="text" value={this.state.name} onChange={this.handleChange} ></input>
                    <span>{this.state.error_name}</span>
                    <text>Email</text> <input name="email" ref="email" value={this.state.email} onChange={this.handleChange} type="text"></input>
                    <span>{this.state.error_email}</span>
                    <text>Contraseña</text> <input name="pass" ref="pass" value={this.state.pass} onChange={this.handleChange} type="password"></input>
                    <span></span>
                    <text>Confirme contraseña</text> <input name="pass_conf" ref="pass_conf" value={this.state.pass_conf} onChange={this.handleChange} type="password"></input>
                    <span>{this.state.error_pass} </span>
                    <input onClick={() => this.sacar_datos()} type="button" value="Registro"></input>
                </form >
            </div >



        )


    }



















}

export default Register;