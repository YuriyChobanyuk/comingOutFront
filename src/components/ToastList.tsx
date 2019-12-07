import React from "react";
import { ToastElement } from "./Toast";
import { useDispatch, useSelector } from "react-redux";
import { removeToast as removeToastAction } from "../redux/actions/toast.actions";
import { RootState } from "../redux/rootReducer";

const ToastList: React.FC = () => {
  const dispatch = useDispatch();

  const removeToast = (id: number) => dispatch(removeToastAction(id));

  const alerts = useSelector(
    ({ toastReducer }: RootState) => toastReducer.alerts
  );

  return (
    <div className="toast__container">
      {alerts.map(alert => (
        <ToastElement data={alert} removeToast={removeToast} key={alert.id} />
      ))}
    </div>
  );
};

export default ToastList;
