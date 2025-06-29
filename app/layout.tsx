import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { JSX } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Xytrix Solutions",
  description: "Xytrix Solutions is a full-service development agency specializing in full-stack web application development, CMS & CRM solutions, third-party integrations, and scalable deployment infrastructure for startups and growing businesses.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <main className={`${poppins.className} antialiased`}>{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
