"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider forcedTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
}
