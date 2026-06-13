import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Versan Engineering | Precision Engineering & Fabrication",
  description: "Built for industry. Engineered to perform. Engineering excellence, reliable solutions, and lasting value for industrial projects demanding strength, accuracy, and accountability.",
  keywords: ["engineering", "fabrication", "industrial manufacturing", "Versan Engineering", "Sangareddy", "Telangana"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-behavior-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
