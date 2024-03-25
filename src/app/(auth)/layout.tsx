import React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default AuthLayout;
