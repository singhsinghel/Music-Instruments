"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { div } from "framer-motion/client";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Instruments">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Instruments">All Instruments</HoveredLink>
            <HoveredLink href="/Instruments?category=Pianos">
              Pianos
            </HoveredLink>
            <HoveredLink href="/Instruments?category=Guitars">
              Guitars
            </HoveredLink>
            <HoveredLink href="Instruments?category=Drums">Drums</HoveredLink>
            <HoveredLink href="Instruments?category=Accessories">
              Accessories
            </HoveredLink>
            <HoveredLink href="Instruments?category=Microphones">
              Microphones
            </HoveredLink>
            <HoveredLink href="Instruments?category=Woodwinds">
              Woodwinds
            </HoveredLink>
            <HoveredLink href="Instruments?category=Cymbals">
              Cymbals
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Github</HoveredLink>
            <HoveredLink href="/interface-design">LinkedIn</HoveredLink>
            <HoveredLink href="/seo">Twitter</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
