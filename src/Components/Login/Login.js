import React, { Component } from 'react';
import Axios from 'axios';

export default class Login extends Component {
    state = {
      usernameValue: '',
      passwordValue: '',
      emailValue: '',
      confirmPassword: '',
      isValid: false,
      validationMessage: '',
      users: [],
    }

    componentDidMount() {
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeconfirmPassword = this.handleChangeconfirmPassword.bind(this);
    }

    validationPassword = () => {
      const { passwordValue, confirmPassword } = this.state;
      const regexp = /[A-Z]/;
      const regexpsmall = /[a-z]/;
      const regNumbers = /[0-9]/;
      const matchesArray = passwordValue.match(regexp);
      const matchesNumArray = passwordValue.match(regNumbers);
      const matchesSmallArray = passwordValue.match(regexpsmall);
      if (passwordValue.length < 6) {
        this.setState({
          isValid: false,
          validationMessage: 'Пароль должен быть больше 6 символов',
        });
      } else if (matchesArray === null) {
        this.setState({
          isValid: false,
          validationMessage: 'Пароль должен иметь символы верхнего регистра',
        });
      } else if (matchesNumArray === null) {
        this.setState({
          isValid: false,
          validationMessage: 'Пароль должен иметь цифры 0-9',
        });
      } else if (matchesSmallArray === null) {
        this.setState({
          isValid: false,
          validationMessage: 'Пароль должен иметь символы нижнего регистра',
        });
      } else if (passwordValue !== confirmPassword) {
        this.setState({
          isValid: false,
          validationMessage: 'Пароли не совпадают',
        });
      } else {
        this.setState({
          isValid: true,
          validationMessage: '',
        });
      }
    }

    handleChangeconfirmPassword = (event) => {
      this.setState({ confirmPassword: event.target.value });
    }

    handleChangeUsername = (event) => {
      this.setState({ usernameValue: event.target.value });
    }

    handleChangePassword = (event) => {
      this.setState({ passwordValue: event.target.value });
      this.validationPassword();
    }

    handleChangeEmail = (event) => {
      this.setState({ emailValue: event.target.value });
    }

    registrationSubmit = async () => {
      const {
        isValid, users, usernameValue, emailValue, passwordValue,
      } = this.state;
      this.validationPassword();
      await Axios.get('http://localhost:3000/users').then(async (res) => {
        console.log(res.data);
        await this.setState({
          users: res.data,
        });
      });
      if (isValid === true) {
        // fetch('http://example.com/movies.json')
        //   .then((res) => {
        //     return res.json();
        //   }).then((data) => {
        //     console.log(data);
        //   });
        // запрос на получение данных из сервера и пихнуть их в state

        users.forEach(async (item) => {
          console.log(item);
          const { name, email } = item;
          if (name === usernameValue) {
            this.setState({
              isValid: false,
              validationMessage: 'Пользователь с таким никнеймом уже зарегестрирован',
            });
          }
          if (email === emailValue) {
            this.setState({
              isValid: false,
              validationMessage: 'Пользователь с такой почтой уже зарегестрирован',
            });
          }
          console.log(isValid);
          if (isValid) {
            // Пуш запрос в бд юзеров
            const newUser = {
              email: emailValue,
              name: usernameValue,
              password: passwordValue,
              region: 'UA',
              subscribes: [],
            };
            Axios.post('http://localhost:3000/users/', JSON.parse(JSON.stringify(newUser))).then((res) => {
              console.log(res.data);
            });
          }
        });
      }
    }

    render() {
      const {
        usernameValue, passwordValue, emailValue, isValid, validationMessage, confirmPassword,
      } = this.state;
      return (
        <div>
          {!isValid && <p>{validationMessage}</p>}
          <input type="text" placeholder="username" value={usernameValue} onChange={this.handleChangeUsername}/>
          <input type="password" placeholder="password" value={passwordValue} onChange={this.handleChangePassword}/>
          <input type="password" placeholder="confirm password" value={confirmPassword} onChange={this.handleChangeconfirmPassword}/>
          <input type="email" placeholder="email" value={emailValue} onChange={this.handleChangeEmail}/>
          <button onClick={this.registrationSubmit}>Зарегестрироваться</button>
        </div>
      );
    }
}
