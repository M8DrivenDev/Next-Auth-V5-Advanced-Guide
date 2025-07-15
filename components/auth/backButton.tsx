"use client";
import Link from "next/link";
import { Button } from "../ui/button";

interface IBackButton {
  href: string;
  label: string;
}
const BackButton = ({ href, label }: IBackButton) => {
  return (
    <Button className="font-normal w-full" size="sm" variant="link" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
