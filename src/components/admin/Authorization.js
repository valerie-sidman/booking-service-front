import React, { useState } from 'react';

export default function Authorization() {

  const [form, setForm] = useState({
    login: '',
    password: ''
  });

  const handleLoginChange = (evt) => {
    setForm(prevForm => ({...prevForm, login: evt.target.value}));
  }

  const handlePasswordChange = (evt) => {
    setForm(prevForm => ({...prevForm, password: evt.target.value}));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Login: " + form.login);
    console.log("Password: " + form.password);
  }

  return (
    <section className="login">
      <header className="login__header">
        <h2 className="login__title">Авторизация</h2>
      </header>
      <div className="login__wrapper">
        <form className="login__form" action="login_submit" method="get" acceptCharset="utf-8" onSubmit={handleSubmit}>
          <label className="login__label" htmlFor="mail">
            E-mail
            <input className="login__input" type="mail" placeholder="example@domain.xyz" name="mail" value={form.login} onChange={handleLoginChange} required />
          </label>
          <label className="login__label" htmlFor="pwd">
            Пароль
            <input className="login__input" type="password" placeholder="" name="pwd" value={form.password} onChange={handlePasswordChange} required />
          </label>
          <div className="text-center">
            <input value="Авторизоваться" type="submit" className="login__button" />
          </div>
        </form>
      </div>
    </section>
  )
}
