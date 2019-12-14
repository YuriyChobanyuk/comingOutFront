import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Tabset from "../components/Tabset";
import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";
import { useDispatch } from "react-redux";
import { thunkLogin, thunkSignUp } from "../redux/actions/user.action";
import { LoginModel, SignUpModel } from "../models/auth.model";

export const Login = () => {
  const dispatch = useDispatch();

  const loginUser = (values: LoginModel) => {
    return dispatch(thunkLogin(values));
  };

  const signUpUser = (values: SignUpModel) => {
    return dispatch(thunkSignUp(values));
  };

  const tabs = [
    {
      title: "sign up",
      component: <SignUpForm submitCallback={signUpUser} />
    },
    {
      title: "login",
      component: <LoginForm submitCallback={loginUser} />
    }
  ];
  return (
    <Fragment>
      <Container className="d-flex justify-content-center vh-100">
        <div className="login__container">
          <Tabset tabs={tabs} />
        </div>
      </Container>
    </Fragment>
  );
};
