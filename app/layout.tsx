import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import GetProductsWrapper from "@/wrappers/GetProductsWrapper";

import { ThemeProvider } from "@/wrappers/ThemeProvider";
import Routeguard from "@/wrappers/RouteGuardWrapper";

import GetThemeWrapper from "@/wrappers/GetThemeWrapper";

import Navbar from "@/components/UI/Navbar";
import Toaster from "@/components/UI/Toaster";
import { ModeToggle } from "@/components/UI/Toggle";
import Hydration from "@/store/slices/Hydration";
import Reload from "@/components/UI/Reload";

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
                <Reload />
                <ModeToggle />
                <Hydration />
                {children}
              </GetThemeWrapper>
            </GetProductsWrapper>
          </Routeguard>
        </ThemeProvider>
      </body>
    </html>
  );
}
