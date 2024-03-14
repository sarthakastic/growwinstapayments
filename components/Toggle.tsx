"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
      console.log(theme);
    }
  };

  React.useEffect(() => {}, [theme]);

  return (
    <div
      onClick={() => handleTheme()}
      className="fixed z-30 top-5 right-5 font-extrabold bg-blue-400"
    >
      <div>
        {/* <DropdownMenuTrigger asChild> */}
        <button className="bg-yellow-500 dark:bg-red-900 hover:bg-foreground">
          <Sun className="h-[1.5rem] w-[1.5rem]  bg-primaryLight rotate-0 scale-100 text-secondaryLight transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 text-secondaryLight scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </div>
  );
}
