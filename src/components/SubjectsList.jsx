import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { getSubjectsList } from "../redux/actions/subject.action";

class SubjectsList extends Component {
  constructor(props) {
    super(props);
    this.getSubjects = this.props.getSubjects;
    this.history = props.history;
    this.location = props.location;
  }
  componentDidMount = () => {
    this.getSubjects();
  };

  moveToSubject(id) {
    this.history.push(`${this.location.pathname}/${id}`);
  }

  render() {
    return (
      <Table striped bordered hover size="sm" className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Coming date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.props.subjects.map(({ title, comingDate, category, _id }) => (
            <tr key={_id} onClick={this.moveToSubject.bind(this, _id)}>
              <td>{title}</td>
              <td>{comingDate}</td>
              <td>{category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateAsProps = ({ subjectReducer }) => {
  return {
    subjects: subjectReducer.subjects
  };
};

const mapActionsAsProps = dispatch => {
  return {
    getSubjects: async () => dispatch(getSubjectsList())
  };
};

export default withRouter(
  connect(mapStateAsProps, mapActionsAsProps)(SubjectsList)
);
