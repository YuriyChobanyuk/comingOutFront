import React, { useRef, useEffect } from "react";

const useOutsideAlerter = (
  ref: React.RefObject<HTMLDivElement>,
  action: Function
) => {
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

interface Props {
  children: JSX.Element;
  action: Function;
  wrapperClasses?: string
}

export const OutsideClickDetector: React.FC<Props> = ({ children, action, wrapperClasses }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, action);

  return <div className={wrapperClasses} ref={wrapperRef}>{children}</div>;
};
