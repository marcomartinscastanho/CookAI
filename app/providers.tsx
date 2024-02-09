import React, { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
};

export default Providers;
