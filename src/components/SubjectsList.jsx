import React, {Component} from 'react';

class SubjectsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subjects: [{
        _id: 11,
        title: 'test title',
        comingDate: 'summer 2020',
        pendingDate: new Date(),
        impPath: 'some path',
        creationDate: new Date(),
        active: true
      }]
    }
  }

  render() {
    return (
      <>
        <h1>Subjects list</h1>
        {this.subjects.map(subject => (
          <h2>{subject.title}</h2>
        ))}
      </>
    );
  }
}

export default SubjectsList;