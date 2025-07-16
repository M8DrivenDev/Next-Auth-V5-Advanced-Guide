import { ReactNode } from "react";
import Navbar from "./_components/navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-br from-[#1f002b] via-[#3d0066] to-[#2c004c]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
