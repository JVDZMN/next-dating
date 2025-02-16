"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  link,
} from "@heroui/react";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";



export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Matches",
    "List",
    "Messages",
    "Sign Up",
    "Log In",
  ];

  return (
      <Navbar
          maxWidth="xl"
          className=" bg-gradient-to-r from-purple-400 to-white "
          classNames={{
            item: [
              'trxt-xl',
              'text-white',
              'uppercase',
              'data-[active=true]:text-yellow-200',
              ]
          }}
          onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={Link} href='/' className="text-black">
          <GiMatchTip size={40}/>
                  <div className=" font-bold text-3xl flex">
                      <span >Next</span>
                      <span>Match</span>
                  </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/list" label="List" />
        <NavLink href="/messages" label="Messages"/>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button variant='bordered' as={Link} color="primary" href="/sign-up" >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button  as={Link} color="primary" href="/log-in" variant="flat">
            login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link 
              className="w-full"
              color={
                index === menuItems.length - 1 ? "primary" : "foreground"
              }
              href={item === "Matches" ? "/members": `/${item.toLowerCase().replace(/\s+/g, '-')}`}  // Converts item to lowercase and replaces spaces with hyphens
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

