import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <NextIntlClientProvider messages={pageProps.messages} locale={locale}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
