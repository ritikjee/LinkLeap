import React from "react";

import MenuOptions from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <MenuOptions />
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Layout;
