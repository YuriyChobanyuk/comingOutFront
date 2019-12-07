import React from "react";
import { Tabs, Tab } from "react-bootstrap";

interface Props {
  tabs: {
    title: string;
    component: JSX.Element
  }[]
}

const Tabset: React.FC<Props> = ({ tabs }) => {
  return (
    <Tabs id={"login-tabs"}>
      {tabs.map(tab => (
        <Tab
          eventKey={tab.title}
          title={tab.title.toUpperCase()}
          key={tab.title}
        >
          {tab.component}
        </Tab>
      ))}
    </Tabs>
  );
};

export default Tabset;
