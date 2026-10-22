import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const description =
  "AI engineer and researcher working on agentic AI, large language models and networking.";

export const metadata: Metadata = {
  title: "Larbi Said Chikh | AI Engineer & Researcher",
  description,
  authors: [{ name: "Larbi Said Chikh" }],
  openGraph: {
    title: "Larbi Said Chikh | AI Engineer & Researcher",
    description,
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
};

// Runs before paint so the saved theme applies without a flash.
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans text-[0.97rem] leading-relaxed">{children}</body>
    </html>
  );
}
