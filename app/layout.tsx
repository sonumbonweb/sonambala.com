import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog - Thoughts on Web Development",
  description: "A minimalist blog about web development, design, and building better software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
