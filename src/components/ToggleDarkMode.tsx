"use client";

import React from "react";
import * as Switch from "@radix-ui/react-switch";
import Image from "next/image";
import { useTheme, useThemeDispatch } from "@/stores/ThemeContext";

const ToggleDarkMode = () => {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();

  function handleChangeDarkMode(checked: boolean) {
    themeDispatch({ type: "TOGGLE_DARK_MODE", payload: checked });
  }

  return (
    <div className="flex gap-4">
      <div className="flex items-center">
        <Switch.Root
          className="w-[40px] h-[20px] bg-[#A445ED] rounded-full relative outline-none cursor-default"
          checked={theme.darkMode}
          onCheckedChange={handleChangeDarkMode}
          style={{
            // @ts-ignore
            "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
          }}
        >
          <Switch.Thumb className="block w-[14px] h-[14px] bg-white rounded-full transition-transform duration-100 translate-x-1 will-change-transform data-[state=checked]:translate-x-[22px]" />
        </Switch.Root>
      </div>
      <Image
        className="md:hidden"
        src="/icon-moon.svg"
        width={28}
        height={32}
        alt="test"
      />
      <Image
        className="hidden md:block"
        src="/icon-moon.svg"
        width={32}
        height={36}
        alt="test"
      />
    </div>
  );
};

export default ToggleDarkMode;
