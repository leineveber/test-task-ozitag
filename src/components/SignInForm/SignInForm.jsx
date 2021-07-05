// react
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// redux
import { useDispatch, useSelector } from 'react-redux';

// components
import Input from '../Input';
import Button from '../Button';

// api
import fetchUser from '../../redux/thunk/fetchUser';
import { BASE_URL, POST_QUERY } from '../../constants/api';

// styles
import './SignInForm.styles.scss';

const SignInForm = ({ className }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.fetchUser?.error?.message);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      fetchUser({
        url: BASE_URL,
        query: POST_QUERY,
        mode: 'access',
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            clientId: 1,
            email,
            password,
          }),
        },
      }),
    );
  };

  return (
    <form className={`${className} form`} onSubmit={handleSubmit}>
      <div className="form__input-wrapper">
        <Input
          className="form__input"
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChangeEmail}
        />
      </div>
      <div className="form__input-wrapper">
        <Input
          className="form__input"
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChangePassword}
        />
      </div>
      {error && <p>{error}</p>}
      <Button className="form__btn button" isSubmit text="SIGN IN" />
    </form>
  );
};

SignInForm.propTypes = {
  className: PropTypes.string,
};

SignInForm.defaultProps = {
  className: '',
};

export default SignInForm;
