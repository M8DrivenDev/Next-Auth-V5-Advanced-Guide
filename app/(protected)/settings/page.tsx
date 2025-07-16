"use client";

import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import React from "react";

const SettingsPage = () => {
  const session = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      <Button onClick={onClick}>Sign out</Button>
    </div>
  );
};

export default SettingsPage;
