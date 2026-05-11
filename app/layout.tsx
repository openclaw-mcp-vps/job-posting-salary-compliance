import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Compliance Checker — Job Posting Transparency Tool",
  description: "Scan job postings for salary transparency law compliance. Detect missing salary ranges, flag violations, and get suggested fixes instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="893b2eee-2724-4d6d-98c0-6afa6f326991"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
