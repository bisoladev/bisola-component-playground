"use client";

import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";



const CssTransition = ({ show, name, children }) => {
  const nodeRef = useRef(null);

  return (
    <div>
      <CSSTransition
        in={show}
        nodeRef={nodeRef}
        timeout={300}
        classNames={name}
        unmountOnExit
        onEnter={() => {}}
        onExited={() => {}}
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default CssTransition;
