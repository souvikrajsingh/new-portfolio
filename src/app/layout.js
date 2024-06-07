import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Souvik | Portfolio",
  description: "Souvik Raj Singh is a Software Developer and a Microsoft Learn Student Ambassador based in India  Here's everything you need to know about him.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/assets/icon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-VV12GM0DCF" />
    </html>
  );
}
