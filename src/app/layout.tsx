import "./globals.css";
import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { Analytics } from "@vercel/analytics/react";
import SelectFontStyle from "@/components/SelectFontStyle";
import { ThemeProvider } from "@/stores/ThemeContext";
import React from "react";
import ToggleDarkMode from "@/components/ToggleDarkMode";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <ThemeProvider>
      <body className="h-full dark:bg-black">
        <div className="p-6 md:p-10 lg:max-w-3xl lg:mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <Image
                className="md:hidden"
                src="/logo.svg"
                width={28}
                height={32}
                alt="logo"
              />
              <Image
                className="hidden md:block"
                src="/logo.svg"
                width={32}
                height={36}
                alt="logo"
              />
              <div className="flex gap-4">
                <SelectFontStyle />
                <div className="border-2 border-r-[#E9E9E9]"></div>
                <ToggleDarkMode />
              </div>
            </div>
            <SearchBar />
            <div>{children}</div>
          </div>
        </div>
        <Analytics />
      </body>
    </ThemeProvider>
  );
}
