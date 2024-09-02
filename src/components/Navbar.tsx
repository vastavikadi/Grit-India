"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
  const [active, setActive] = useState<string | null>(null);
return(
  <div className={cn("fixed top-3 inset-x-0 max-w-2xl mx-auto z-50", className)}>
    <Menu setActive={setActive}>
      <Link href={"#"}>
      <MenuItem setActive={setActive} active={active} item="Home" ></MenuItem>
      </Link>

      <Link href={"#"}>
      <MenuItem setActive={setActive} active={active} item="Dress">
      <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="./dressmale">Male</HoveredLink>
            <HoveredLink href="./dressfemale">Female</HoveredLink>
          </div>
          </MenuItem>
      </Link>

      <Link href={"#"}>
      <MenuItem setActive={setActive} active={active} item="Tales">
      <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="./tales">Read Now</HoveredLink>
          </div>
          </MenuItem>
      </Link>

      <Link href={"#"}>
      <MenuItem setActive={setActive} active={active} item="Food">
      <div className="text-sm grid grid-cols-3 gap-10 p-4">
      <HoveredLink href="#">Jammu & Kashmir</HoveredLink> 
      <HoveredLink href="#">Punjab</HoveredLink> 
      <HoveredLink href="#">Uttar Pradesh</HoveredLink> 
      <HoveredLink href="#">Bihar</HoveredLink> 
      <HoveredLink href="#">Rajasthan</HoveredLink> 
      <HoveredLink href="#">Kerala</HoveredLink> 
          </div>
          </MenuItem>
      </Link>

      <Link href={"#"}>
      <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
      </Link>
    </Menu>
  </div>
)
}
export default Navbar