'use client'
import React, { useState } from "react";
import { Session } from 'next-auth'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/react";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";
import UserMenu from "./UserMenu";

type Props = {
    user: Session['user'];
}
export default function TopNavbarClient({user} : Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = user ?
    ["Matches", "List", "Messages",] :
    ["Matches", "List", "Messages", "Sign Up", "Log In",];
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
          >
      <NavbarContent>
        <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      <NavbarContent justify="end"  >
        {user ? (
        <UserMenu user={user}  />
        ) : (
            <>
              <NavbarItem className="hidden sm:flex">
              <Button variant='bordered' as={Link} color="primary" href="/sign-up" >
                Sign Up
              </Button>
            </NavbarItem>
            <NavbarItem  className="hidden
            sm:flex">
              <Button  as={Link} color="primary" href="/log-in" variant="flat">
                login
              </Button>
            </NavbarItem>
            </>
        )}
        
      </NavbarContent>
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
    </Navbar>
  );
}

