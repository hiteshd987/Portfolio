import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Modern Portfolio built with Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
