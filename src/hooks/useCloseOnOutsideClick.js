import { useEffect, useRef, useState } from "react";

export const useCloseOnOutsideClick = (initialValue) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current?.contains(event.target) &&
      !ref1.current?.contains(event.target)
    )
      setVisible(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { visible, setVisible, ref, ref1 };
};
