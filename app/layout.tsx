import type { Metadata } from "next";
import "./globals.css";

const title = "Md. Maksud Bhuiyan | Senior Executive Backend Developer & AI Automation";
const description =
  "Senior Executive Backend Developer specializing in Laravel, PHP, Node.js, scalable APIs, SaaS systems, AI agents and workflow automation.";

export const metadata: Metadata = {
  title,
  description,
  // Replace with your real domain once it is live.
  metadataBase: new URL("https://example.com"),
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
