import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authorization, changeField } from '../../actions/actionCreators';

export default function Authorization() {

  const { login, password, result } = useSelector(state => state.serviceAuthorization);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (result.result === 'Ok') {
      navigate("/admin/authorized");
    }
  }, [result, navigate]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    authorization(dispatch, login, password);
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
              <input className="login__input" type="mail" placeholder="example@domain.xyz" name="login" value={login} onChange={handleChange} required />
            </label>
            <label className="login__label" htmlFor="pwd">
              Пароль
              <input className="login__input" type="password" placeholder="" name="password" value={password} onChange={handleChange} required />
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
