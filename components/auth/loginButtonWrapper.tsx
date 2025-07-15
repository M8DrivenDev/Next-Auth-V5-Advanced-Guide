"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ILoginButton {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
const LoginButtonWrapper = ({
  children,
  mode = "redirect",
  asChild,
}: ILoginButton) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginButtonWrapper;
