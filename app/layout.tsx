import "./globals.css";
import { Inter } from "next/font/google";
import ChakraWrapper from "@/components/chakrawrapper";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Valence Robotics",
  description: "FRC Team 8429",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <div className="flex flex-col min-h-screen dark:bg-black dark:text-slate-200">
          <ChakraWrapper>
            {children}
            <div className="grow" />
            <Footer />
          </ChakraWrapper>
        </div>{" "}
      </body>
    </html>
  );
}
