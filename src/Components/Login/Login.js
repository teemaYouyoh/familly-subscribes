import React, {Component} from "react";

export default class Login extends Component{
    state = {
        usernameValue: "",
        passwordValue: "",
        emailValue: "",
        confirmPassword: "", 
        isValid: false,
        validationMessage: ""
    }

    componentDidMount(){
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeconfirmPassword = this.handleChangeconfirmPassword.bind(this);
    }

    validationPassword = () => {
        const {passwordValue, confirmPassword} = this.state;
        const regexp = /[A-Z]/;
        const regexpsmall = /[a-z]/;
        const regNumbers = /[0-9]/;
        let matches_array = passwordValue.match(regexp);
        let matchesNum_array = passwordValue.match(regNumbers);
        let matchesSmall_array = passwordValue.match(regexpsmall);
        console.log(matches_array);
        if(passwordValue.length < 6){
            this.setState({
                isValid: false,
                validationMessage: "Пароль должен быть больше 6 символов" 
            })
        }
        else if(matches_array === null){
            this.setState({
                isValid:false,
                validationMessage: "Пароль должен иметь символы верхнего регистра"
            })
        }
        else if(matchesNum_array === null){
            this.setState({
                isValid:false,
                validationMessage: "Пароль должен иметь цифры 0-9"
            })
        }
        else if(matchesSmall_array === null){
            this.setState({
                isValid:false,
                validationMessage: "Пароль должен иметь символы нижнего регистра"
            })
        }
        else if(passwordValue !== confirmPassword){
            this.setState({
                isValid:false,
                validationMessage: "Пароли не совпадают"
            })
        }
        else {
            this.setState({
                isValid: true,
                validationMessage: ""
            })
        }
    }

    handleChangeconfirmPassword = (event) => {
        this.setState({confirmPassword: event.target.value});
    }

    handleChangeUsername = (event) => {
        this.setState({usernameValue: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({passwordValue: event.target.value});
        this.validationPassword();

    }

    handleChangeEmail = (event) => {
        this.setState({emailValue: event.target.value});
    }

    registrationSubmit = () => {
        const {isValid} = this.state;
        this.validationPassword();
        if(isValid === true){
            alert("Вы успешно зарегестрировались");
        }
    }

    render(){
        const {usernameValue, passwordValue, emailValue, isValid, validationMessage, confirmPassword} = this.state;
        console.log(usernameValue, passwordValue, emailValue);
        return(
            <div>
                {!isValid && <p>{validationMessage}</p>}
                <input type="text" placeholder="username" value={usernameValue} onChange={this.handleChangeUsername}/>
                <input type="password" placeholder="password" value={passwordValue} onChange={this.handleChangePassword}/>
                <input type="password" placeholder="confirm password" value={confirmPassword} onChange={this.handleChangeconfirmPassword}/>
                <input type="email" placeholder="email" value={emailValue} onChange={this.handleChangeEmail}/>
                <button onClick={this.registrationSubmit}>Войти</button>
            </div>
        )
    }
}