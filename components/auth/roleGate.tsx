"use client";

import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import { ReactNode } from "react";
import { FormError } from "../formError";

interface IRoleGate {
  children: ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: IRoleGate) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You don't have permission to view this content!" />
    );
  }
  return <>{children}</>;
};
