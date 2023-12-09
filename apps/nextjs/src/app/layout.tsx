import { Metadata } from "next";

import { Poppins } from "next/font/google";
import React from "react";
import Provider from "./Provider";

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RaselOfficial",
  description: "This is my personal website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
