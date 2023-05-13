import "./globals.css";
import { Inconsolata, Inter, Lora } from "next/font/google";
import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-6 md:p-10">
          <div className="flex flex-col gap-6">
            <div>
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
            </div>
            <SearchBar />
            <div>{children}</div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
