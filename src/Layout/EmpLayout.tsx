import React from "react";
import { LayoutProps } from "../models/layout";

const EmpLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
        <div className="container">
          {children}
        </div>
      {/* <Footer /> */}
    </>
  );
};

export default EmpLayout;