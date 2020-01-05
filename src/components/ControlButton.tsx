import React, { useState, FC, MouseEvent } from "react";
import { OutsideClickDetector } from "./OutsideClickDetector";
import { ControlList } from "./ControlList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ControlOptions } from "../models/types.model";

interface Props {
  options: ControlOptions<any> | undefined;
  target: any;
  theme?: "light" | "dark";
}

export const ControlButton: FC<Props> = ({
  options,
  target,
  theme = "dark"
}) => {
  const [show, setShow] = useState(false);

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    setShow(!show);
  };

  return (
    <OutsideClickDetector
      action={setShow.bind(null, false)}
      wrapperClasses={`d-inline-block`}
    >
      <div className="control-button__container">
        <button
          className={`control-button__button btn btn-outline-${theme}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faBars} className={`button-icon`} />
        </button>
        {show && <ControlList options={options} target={target} />}
      </div>
    </OutsideClickDetector>
  );
};
