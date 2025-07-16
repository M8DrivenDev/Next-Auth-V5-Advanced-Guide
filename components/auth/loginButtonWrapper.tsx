"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import LoginForm from "./loginForm";

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
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <VisuallyHidden>
            <DialogTitle>Dialog Title</DialogTitle>
          </VisuallyHidden>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginButtonWrapper;
