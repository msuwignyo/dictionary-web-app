import "./globals.css";
import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { Analytics } from "@vercel/analytics/react";
import SelectFontStyle from "@/components/SelectFontStyle";
import { ThemeProvider } from "@/stores/ThemeContext";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <html lang="en">
      <ThemeProvider>
        <div className="p-6 md:p-10 lg:max-w-3xl lg:mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <Image
                className="md:hidden"
                src="/logo.svg"
                width={28}
                height={32}
                alt="test"
              />
              <Image
                className="hidden md:block"
                src="/logo.svg"
                width={32}
                height={36}
                alt="test"
              />
              <SelectFontStyle />
            </div>
            <SearchBar />
            <div>{children}</div>
          </div>
        </div>
        <Analytics />
      </ThemeProvider>
    </html>
  );
}
