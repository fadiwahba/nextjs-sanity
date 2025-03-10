import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Startup Directory",
  description: "Vote and Grow your favorite startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main
        className={`font-work-sans antialiased container mx-auto px-10 py-10 border-1 border-gray-500`}
      >
        {children}
      </main>
    </>
  );
}
