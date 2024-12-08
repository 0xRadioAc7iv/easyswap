import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { getLocale } from "next-intl/server";

import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";

import "./_assets/globals.css";
import "@coinbase/onchainkit/styles.css";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        style={{
          background: "linear-gradient(to bottom, #1E3A8A 20%, #020304 80%)", 
          minHeight: "100vh",
          margin: 0,
        }}>
        <I18nProvider>
          <Root>{children}</Root>
        </I18nProvider>
      </body>
    </html>
  );
}
