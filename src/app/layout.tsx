import "./globals.css";
import { Inconsolata, Inter, Lora } from "next/font/google";
import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

// @ts-ignore
export default function RootLayout(props) {
  console.log(props);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-6">
          <div className="flex flex-col gap-6">
            <div>
              <Image src="/logo.svg" width={28} height={32} alt="test" />
            </div>
            <SearchBar />
            <div>{props.children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
