import React from "react";
import Left from "./@left/page";
import Right from "./@right/page";

type TLeft_right_layoutProps = {
  children: React.ReactNode;
};

const left_right_layout: React.FC<TLeft_right_layoutProps> = ({ children }) => {
  return (
    <section>
      <h1>Heading</h1>
      <Left />
      {children}
      <Right />
    </section>
  );
};

export default left_right_layout;
