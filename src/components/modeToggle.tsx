"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react"; //? Import Moon and Sun icons from the 'lucide-react' library
import { useTheme } from "next-themes"; //? Import the 'useTheme' hook from 'next-themes' to manage theme switching

import { Button } from "@/components/ui/button"; //? Import a custom Button component
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; //? Import custom Dropdown Menu components

//? Component to toggle between light, dark, and system themes
export function ModeToggle() {
  const { setTheme } = useTheme(); //? Destructure 'setTheme' function to update the current theme

  return (
    <DropdownMenu>
      {/* Wrap the theme toggle in a DropdownMenu */}
      <DropdownMenuTrigger asChild>
        {/* Trigger for opening the dropdown menu */}
        <Button variant="outline" size="icon" className="bg-yellow-400">
          {/* Styled button to toggle the menu */}
          {/* Sun icon, visible in light mode */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon icon, visible in dark mode */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
          {/* Accessible text for screen readers */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Dropdown menu content aligned to the end */}
        {/* Menu item for switching to light theme */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        {/* Menu item for switching to dark theme */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        {/* Menu item for using the system's default theme */}
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
