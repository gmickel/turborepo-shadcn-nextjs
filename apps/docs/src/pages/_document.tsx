import Document, { Head, Html, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';
import { inter } from '../fonts';

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="en">
        <Head />
        <body className={inter.className}>
          <SkipNavLink styled />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
