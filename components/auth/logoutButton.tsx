"use client";

import { logout } from "@/actions/auth";
import { ReactNode } from "react";

interface ILogoutButton {
  children?: ReactNode;
}

const LogoutButton = ({ children }: ILogoutButton) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
