import React, { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="bg-meroColor-jet-black text-meroColor-light-grey py-10">
      <div className="flex items-center justify-evenly flex-col transition-all ease-in-out">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
