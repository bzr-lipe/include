'use client';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/global';
import { fontNames } from '@/styles/_fonts';
import { UserProvider } from '@/contexts/user';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fontNames}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <UserProvider>{children}</UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
