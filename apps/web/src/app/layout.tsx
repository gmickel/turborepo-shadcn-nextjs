import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import { Providers } from './providers';

import '@repo/ui/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Simple Next.js with ShadCN UI Starter',
  description: 'Generated by @gmickel',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
