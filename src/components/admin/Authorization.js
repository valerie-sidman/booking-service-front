import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

export default function Authorization() {

  const [form, setForm] = useState({
    login: '',
    password: ''
  });

  let navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value}));
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    fetch("http://localhost:8000/api/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.result === 'Ok') {
            localStorage.setItem('auth', JSON.stringify(form));
            navigate("/admin/authorized");
            console.log('Succes', result);
          } else {
            alert("Incorrect login or password. Try again.");
            console.log('Error', result);
          }
        }
      )
  }

  return (
    <React.Fragment>
      <section className="login">
        <header className="login__header">
          <h2 className="login__title">Авторизация</h2>
        </header>
        <div className="login__wrapper">
          <form className="login__form" action="login_submit" method="get" acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label className="login__label" htmlFor="mail">
              E-mail
              <input className="login__input" type="mail" placeholder="example@domain.xyz" name="login" value={form.name} onChange={handleChange} required />
            </label>
            <label className="login__label" htmlFor="pwd">
              Пароль
              <input className="login__input" type="password" placeholder="" name="password" value={form.name} onChange={handleChange} required />
            </label>
            <div className="text-center">
              <input value="Авторизоваться" type="submit" className="login__button" />
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  )
}
