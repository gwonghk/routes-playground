'use client';

import { Theme as RadixTheme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <RadixTheme>{children}</RadixTheme>
    </ThemeProvider>
  );
};
export default ThemesProvider;
