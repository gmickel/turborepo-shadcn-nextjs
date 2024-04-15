import type { AppProps } from 'next/app';

import { inter } from '../fonts';

import '../globals.css';

// import '@repo/ui/globals.css'; - Import this if you want to use the styles and components from the UI package

import type { ReactElement } from 'react';

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.variable};
        }
      `}</style>
      <Component foo="bar" {...pageProps} />
    </>
  );
}
