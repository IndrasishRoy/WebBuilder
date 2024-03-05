import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/Builder.svg"
  },
  title: "Web Builder",
  description: "Created by Indrasish Roy using nextjs framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
