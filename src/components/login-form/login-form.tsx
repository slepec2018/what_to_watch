import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/data';
import { loginAction } from '../../store/api-actions';
import classNames from 'classnames';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = useState({login: true, password: true});
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState<AuthData>({
    login: '',
    password: '',
  });

  const hanldeFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const hanldeFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.login)) {
      setErrorMessage('Please enter a valid email address');
      setIsValid({login: false, password: true});
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/.test(formData.password)) {
      setErrorMessage('The password must consist of at least one letter and a number.');
      setIsValid({login: true, password: false});
    } else {
      dispatch(loginAction(formData));
    }
  };

  return (
    <form action="#" className="sign-in__form" onSubmit={hanldeFormSubmit}>
      {errorMessage &&
        <div className="sign-in__message">
          <p>{errorMessage}</p>
        </div>}
      <div className="sign-in__fields">
        <div className={classNames('sign-in__field', {'sign-in__field--error': !isValid.login})}>
          <input
            onChange={hanldeFieldChange}
            value={formData.login}
            className="sign-in__input"
            type="email"
            name="login"
            placeholder="Email"
            required
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className={classNames('sign-in__field', {'sign-in__field--error': !isValid.password})}>
          <input
            onChange={hanldeFieldChange}
            value={formData.password}
            className="sign-in__input"
            type="password"
            name="password"
            placeholder="Password"
            minLength={2}
            required
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}

export default LoginForm;
