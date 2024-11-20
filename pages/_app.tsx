import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <NextIntlClientProvider messages={pageProps.messages} locale={locale}>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
