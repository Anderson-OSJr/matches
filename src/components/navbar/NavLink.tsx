"use client";

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <>
      <NavbarItem isActive={pathname === href} as={Link} href={href}>
        {label}
      </NavbarItem>
    </>
  );
};
export default NavLink;
