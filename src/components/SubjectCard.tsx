import React from "react";
import { Row, Image, Card } from "react-bootstrap";
import { isBoolean } from "util";
import SubjectModel from "../models/subject.model";

import { apiURL } from "../configs";

export default function SubjectCard(props: { subject: SubjectModel, children: React.ElementType }) {
  const { title, imgPath, ...rest } = props.subject;

  return (
    <div className="subject-card mt-3">
      <Card>
        <Card.Body>
          <Row>
            <div className="col-3">
              <Image src={`${apiURL}/${imgPath}`} rounded className="mt-2" />
            </div>
            <div className="col">
              <Row className="align-items-baseline">
                <div className="subject-card__title col-12 mb-3">{title}</div>
                <Row className="col">
                  <div className="col-8">
                    {Object.keys(rest)
                      .filter(key => !["__v", "_id"].includes(key))
                      .map(key => (
                        <div
                          className="col-12 subject-card__data-item d-flex align-items-center"
                          key={key}
                        >
                          <div className="subject-card__field-name col-4">
                            {key}
                          </div>
                          <div className="subject-card__field-value col">
                            {pipeValue(rest[key])}
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="col-4">{props.children}</div>
                </Row>
              </Row>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

function pipeValue(value: boolean | string): boolean | string {
  if (isBoolean(value)) {
    return (value + "").toUpperCase();
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    return new Date(value).toLocaleDateString();
  }
  return value;
}
