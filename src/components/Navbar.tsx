'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link'
import ThemeButton from "./ThemeButton";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  function changeTheme(selectedTheme: string) {
    const rootClass = document.documentElement.classList;
    rootClass.remove('dark', 'light');
    rootClass.add(selectedTheme);
  }

  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Theme">
          <div className="flex flex-col space-y-4 text-sm">
            <ThemeButton onClick={() => changeTheme('light')}>
              Light
            </ThemeButton>
            <ThemeButton onClick={() => changeTheme('dark')}>
              Dark
            </ThemeButton>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
