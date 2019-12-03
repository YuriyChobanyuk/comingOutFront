import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import PropTypes from "prop-types";

const Tabset = ({ tabs }) => {
  return (
    <Tabs>
      {tabs.map(tab => (
        <Tab eventKey={tab.title} title={tab.title.toUpperCase()} key={tab.title}>
          {tab.component}
        </Tab>
      ))}
    </Tabs>
  );
};

Tabset.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.element
    })
  )
};

export default Tabset;
