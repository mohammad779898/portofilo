import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deanj | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Deanj - Full-stack developer skilled in Flutter, Next.js, Django, Python and more. Contact: deanj7798@gmail.com",
  keywords: [
    "Deanj",
    "Flutter",
    "Next.js",
    "Django",
    "Python",
    "Full-stack developer",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
