import './globals.css';
import {NextIntlClientProvider, hasLocale} from 'next-intl'
import {routing, Locale } from '@/i18n/routing';
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GoLab Restaurant | Fine Dining Experience',
  description: 'Experience the finest dining with authentic flavors, warm ambiance, and exceptional service at GoLab Restaurant.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages()
  return (
    <html  lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
      <NextIntlClientProvider >
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}