import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata = {
  title: "My Portfolio",
  description: "Modern Portfolio built with Next.js App Router",
};

// Injected before page renders to prevent flash of wrong theme
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('portfolio-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before React hydration — prevents white flash in dark mode */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}