import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccessTemplate from 'templates/AccessTemplate/AccessTemplate';
import UserService from 'services/UserService';

const LoginView = () => {
  const navigate = useNavigate();
  const onSubmitFn = (e) => {
    e.preventDefault();
    const username = document.querySelector('[name="username"]').value;
    const password = document.querySelector('[name="password"]').value;

    try {
      UserService.login(username, password).then(() => navigate('/notes'));
    } catch (error) {
      console.log(error);
    }
  };
  return <AccessTemplate buttonText="Login" linkTo="signup" linkText="Create account" headingText="Log in" onSubmitFn={onSubmitFn} />;
};

export default LoginView;
