import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useHistory } from "react-router";
import { Avatar } from "./Avatar";
import { UserControlOptions } from "./UserControlOptions";
import { OutsideClickDetector } from "./OutsideClickDetector";
import { throttler } from "../helpers/throttler";

export const UserControl: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const redirectToLogin = () => {
    history.replace("/login");
  };

  const handleShow = throttler(() => {
    setShow(!show);
  }, 500);

  if (!user)
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={redirectToLogin}
      >
        Login/SignUp
      </button>
    );

  return (
    <div className="user-control">
      <span className="user-control__name"> {user.name}</span>
      <OutsideClickDetector action={setShow.bind(null, false)}>
        <>
          <Avatar clickHandler={handleShow}></Avatar>
          {show && <UserControlOptions />}
        </>
      </OutsideClickDetector>
    </div>
  );
};
