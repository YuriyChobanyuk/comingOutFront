import React from "react";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Subject = ({title}) => {

  return (
    <div>
      <h1>Aloha</h1>
      {title}
    </div>
  );
};

const mapStoreToProps = ({ subjectReducer }, ownProps) => {
  const { id } = ownProps.match.params;
  const currentSubject = subjectReducer.subjects.find(
    subject => subject._id === id
  );
  return {
    ...currentSubject
  };
};


export default withRouter(connect(mapStoreToProps)(Subject));
