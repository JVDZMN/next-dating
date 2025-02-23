"use client";
import React, { useState } from "react";
import {
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";



export default function MobileMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   const menuItems = [
    "Matches",
    "List",
    "Messages",
    "Sign Up",
    "Log In",
  ];
  return (
    <>
      {/* Menu Toggle Button */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Mobile Menu (shown when isMenuOpen is true) */}
      {isMenuOpen && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link 
                className="w-full"
                color={index === menuItems.length - 1 ? "primary" : "foreground"}
                href={item === "Matches" ? "/members": `/${item.toLowerCase().replace(/\s+/g, '-')}`}  // Converts item to lowercase and replaces spaces with hyphens
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
                  ))}
        </NavbarMenu>
      )}
    </>
  );
}
