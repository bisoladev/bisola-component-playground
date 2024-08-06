"use client";

import { useEffect, useRef, useState } from "react";
import CssTransition from "./CssTransition";

const MobileSidebar = ({ open, passRef }) => {
  const [child, setChild] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (open) {
      timeoutRef.current = setTimeout(() => {
        setChild(true);
      }, 100);
    } else {
      setChild(false);
    }

    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, [open]);

  return (
    <CssTransition show={open} name="move-in">
      <div className="fixed overflow-y-auto inset-0 bg-[#323b4b4b] backdrop-blur-[1px] h-dvh w-full">
        <div>
          <CssTransition show={child} name="move-in">
            <div
              ref={passRef}
              className="w-[75%] max-w-[400px] bg-white flex-1 h-dvh"
            ></div>
          </CssTransition>
        </div>
      </div>
    </CssTransition>
  );
};

export default MobileSidebar;
