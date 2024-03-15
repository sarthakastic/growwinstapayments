import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GetProductsWrapper from "@/wrappers/GetProductsWrapper";

import { ThemeProvider } from "@/wrappers/ThemeProvider";
import Routeguard from "@/wrappers/RouteGuardWrapper";
import Toaster from "@/components/Toaster";
import GetThemeWrapper from "@/wrappers/GetThemeWrapper";
import { ModeToggle } from "@/components/Toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groww Instapayments",
  description: "Assignment for Groww Web Internship",
  icons: {
    icon: "./favicon.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-documentPrimaryBackground dark:bg-documentSecondaryBackground `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Routeguard>
            <GetProductsWrapper>
              <GetThemeWrapper>
                <Navbar />
                <Toaster />
                <ModeToggle />
                {children}
              </GetThemeWrapper>
            </GetProductsWrapper>
          </Routeguard>
        </ThemeProvider>
      </body>
    </html>
  );
}
