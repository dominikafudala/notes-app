import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccessTemplate from 'templates/AccessTemplate/AccessTemplate';
import UserService from 'services/UserService';

const SignupView = () => {
  const navigate = useNavigate();
  const onSubmitFn = (e) => {
    e.preventDefault();
    const username = document.querySelector('[name="username"]').value;
    const password = document.querySelector('[name="password"]').value;

    try {
      UserService.signup(username, password).then(() => navigate('/login'));
    } catch (error) {
      console.log(error);
    }
  };
  return <AccessTemplate buttonText="Sign up" linkTo="login" linkText="Login instead" headingText="Sign up" onSubmitFn={onSubmitFn} />;
};

export default SignupView;
