import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Souvik | Portfolio",
  description: "Souvik Raj Singh is a Full Stack Developer based in India. Here you can find his projects, blogs, and contact information. Check out StacksAway his latest project!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/assets/icon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
