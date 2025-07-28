import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingProvider";
import PreloadPages from "@/components/PreloadPages";
import Decorations from "@/components/Decorations";
import Background from "@/components/Background";
// import Cursor from "@/components/Cursor"; // Uncomment to enable custom cursor
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import ReactPlugin from "@stagewise-plugins/react";
import { portfolioConfig } from "@/config/portfolio";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: portfolioConfig.seo.title,
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords.join(", "),
  authors: [{ name: portfolioConfig.personal.name }],
  openGraph: {
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    url: portfolioConfig.seo.url,
    siteName: portfolioConfig.personal.name,
    images: [
      {
        url: portfolioConfig.seo.ogImage,
        width: portfolioConfig.seo.ogImageWidth,
        height: portfolioConfig.seo.ogImageHeight,
        alt: `${portfolioConfig.personal.name} - Portfolio`,
      },
    ],
    locale: portfolioConfig.seo.locale,
    type: portfolioConfig.seo.type,
  },
  twitter: {
    card: portfolioConfig.seo.twitterCard,
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    images: [portfolioConfig.seo.ogImage],
  },
};

export const viewport = {
  width: portfolioConfig.seo.viewport.width,
  initialScale: portfolioConfig.seo.viewport.initialScale,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={portfolioConfig.seo.htmlLang} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute={portfolioConfig.theme.attribute}
          defaultTheme={portfolioConfig.theme.defaultTheme}
          enableSystem={portfolioConfig.theme.enableSystem}
          disableTransitionOnChange={portfolioConfig.theme.disableTransitionOnChange}
        >
          <LoadingProvider>
            <PreloadPages />
            <Decorations density={portfolioConfig.components.decorations.density} />
            {portfolioConfig.components.background.variants.map((variant) => (
              <Background key={variant} variant={variant} />
            ))}
            {children}
            <StagewiseToolbar 
              config={{
                plugins: [ReactPlugin]
              }}
            />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
