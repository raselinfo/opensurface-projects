"use client";

import { SparkProvider } from "@stacklearner/spark-ui";

type ProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => (
  <SparkProvider>{children}</SparkProvider>
);

export default Provider;
