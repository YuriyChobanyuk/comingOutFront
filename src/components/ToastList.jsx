import React from "react";
import { ToastElement } from "./Toast";
import {connect} from 'react-redux';
import {removeToast} from '../redux/actions/toast.actions'; 

const ToastList = ({alerts, removeToast}) => {
  return (
    <div className="toast__container">
      {alerts.map(alert => (
        <ToastElement data={alert} removeToast={removeToast} key={alert.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({toastReducer}) => ({
  alerts: toastReducer.alerts
})

const mapActionsToProps = dispatch => ({
  removeToast: id => dispatch(removeToast(id))
});

export default connect(mapStateToProps, mapActionsToProps)(ToastList);