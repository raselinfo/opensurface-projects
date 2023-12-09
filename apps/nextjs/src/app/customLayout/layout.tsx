'use client'
import Header from "@/components/Header";
import { Spacer } from "@stacklearner/spark-ui";
import React from "react";

type TCustomLayoutProps = {
  children: React.ReactNode;
};

const customLayout: React.FC<TCustomLayoutProps> = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default customLayout;
