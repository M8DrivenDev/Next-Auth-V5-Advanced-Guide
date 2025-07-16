"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { AvatarFallback } from "../ui/avatar";
import { FaUser } from "react-icons/fa6";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import LogoutButton from "./logoutButton";
import { IoMdExit } from "react-icons/io";

const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user?.image || ""} alt="user" referrerPolicy="no-referrer"/>
          <AvatarFallback className="bg-purple-900">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex justify-center items-center gap-2 text-black font-medium">
              <IoMdExit className="text-black font-medium h-4 w-4" />
              <p>Logout</p>
            </div>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
