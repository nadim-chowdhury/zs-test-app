import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/providers/theme-provider";
import StoreProvider from "@/components/providers/store-provider";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "ZS Test App",
  description:
    "ZS Test App built with Next.js, Redux Toolkit, and modern UI setup.",
  applicationName: "ZS Test App",
  keywords: ["ZS", "Test App", "Next.js", "Redux Toolkit", "TypeScript"],
  authors: [{ name: "Nadim Chowdhury" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} antialiased bg-background text-foreground`}
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Header />
              {children}
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
