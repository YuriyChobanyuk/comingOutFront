import React from "react";
import { Container } from "react-bootstrap";
import Tabset from "../components/Tabset";
import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";

export const Login = () => {
  const tabs = [
    {
      title: "sign up",
      component: <SignUpForm submitCallback={() => {}} />
    },
    {
      title: "login",
      component: <LoginForm submitCallback={() => {}} />
    }
  ];
  return (
    <Container className="d-flex justify-content-center vh-100">
      <div className="login__container">
        <Tabset tabs={tabs} />
      </div>
    </Container>
  );
};
