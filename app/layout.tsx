import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Versan Engineering | Precision Engineering & Fabrication",
  description: "Built for industry. Engineered to perform. Engineering excellence, reliable solutions, and lasting value for industrial projects demanding strength, accuracy, and accountability.",
  keywords: ["engineering", "fabrication", "industrial manufacturing", "Versan Engineering", "Sangareddy", "Telangana"],
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
      </head>
      <body className="min-h-full flex flex-col bg-white text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
