"use client"



import { SparkProvider, Theme } from "@stacklearner/spark-ui";
import React from "react";

type TSparkUIProviderProps = {
  children: React.ReactNode;
};

const theme: Theme = {
  colors: {
    primary: {
      main: "red",
      light: "#e3f2fd",
    },

  },
};



const SparkUIProvider: React.FC<TSparkUIProviderProps> = ({ children }) => {
  // return <SparkProvider theme={theme}>{children}</SparkProvider>;
  return <SparkProvider >{children}</SparkProvider>;
};

export default SparkUIProvider;
