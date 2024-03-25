import React from "react";

import MenuOptions from "@/components/sidebar";
import InfoBar from "@/components/globals/info-bar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <MenuOptions />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
