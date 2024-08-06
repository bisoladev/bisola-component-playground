"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const TitleContext = createContext({});

export default function TitleProvider({ children }) {
  const [title, setTitle] = useState("");
  const updateTitle = (arg) => {
    setTitle(arg);
  };

  return (
    <TitleContext.Provider value={{ title, updateTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export const useTitleContext = () => {
  const { title } = useContext(TitleContext);

  return { title };
};

export const useSetTitle = (arg) => {
  const { updateTitle } = useContext(TitleContext);
  useEffect(() => {
    updateTitle(arg);
  }, [arg, updateTitle]);
};
