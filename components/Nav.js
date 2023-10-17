"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Navigation() {
  return (
    <Navbar className={jetbrains.className} shouldHideOnScroll>
      <NavbarBrand className="font-bold text-xl">&#123; IMP &#125;</NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-xl" href="#project" aria-current="page">
            Project
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#contact" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
