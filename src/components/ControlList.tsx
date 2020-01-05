import React, { FC, MouseEvent } from "react";
import { ControlOptions } from "../models/types.model";

interface Props {
  options: ControlOptions<any> | undefined;
  target: any;
}

export const ControlList: FC<Props> = ({ options, target }) => {
  if (!options) return <h1>no options provided</h1>;
  const handleClick = (event: MouseEvent, action: (item: any) => void) => {
    event.stopPropagation();
    action(target);
  };
  return (
    <ul className="list-group control-list">
      {options.map(({ action, title }) => (
        <li
          className="list-group-item control-list__item"
          onClick={e => handleClick(e, action)}
          key={title}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};
