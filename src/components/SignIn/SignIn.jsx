// react
import React from 'react';

// components
import Section from '../Section';
import SignInForm from '../SignInForm';

// styles
import './SignIn.styles.scss';

const SignIn = () => (
  <Section className="signin-page">
    <div className="signin-page__wrapper signin">
      <h1 className="signin__title title">SIGN IN</h1>
      <SignInForm className="signin__form" />
    </div>
  </Section>
);

export default SignIn;
