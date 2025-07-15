import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#1f002b] via-[#3d0066] to-[#2c004c]">
      {children}
    </div>
  );
};

export default AuthLayout;
