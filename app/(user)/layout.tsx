import '@/scss/style.scss';
import '@/public/styles/plugins/bootstrap-grid.css';
import '@/public/styles/plugins/font-awesome.min.css';
import '@/public/styles/plugins/swiper.min.css';
import GoogleAnalyticsScript from "@/components/tools/google-analytics-script";
// import { Analytics } from "@vercel/analytics/react";
import { siteConfig, seoKeywords } from "@/config/site";
import type {Metadata} from "next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: seoKeywords,
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} - ${siteConfig.description}`,
      description: siteConfig.description,
      images: [`${siteConfig.url}opengraph-image`],
      creator: "@Kolynz_b",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: `${siteConfig.url}opengraph-image`,
        },
      ],
    },
    alternates: {
      types: {
        'application/rss+xml': `${siteConfig.url}rss.xml`,
      },
    },
    creator: "Atuhaire Collins Benda",
    publisher: "Atuhaire Collins Benda",
    metadataBase: new URL(siteConfig.url),
    authors: [
      { name: "Atuhaire Collins Benda", url: "https://collinsbenda.com" },
      { name: "Andrew Tugume" },
    ],
    applicationName: siteConfig.name,
    icons: [
      {
        rel: "apple-touch-icon",
        url: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
      },
    ],
    manifest: "/favicon/site.webmanifest",
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
               <head>
        <GoogleAnalyticsScript />
      </head>
            <body>
                <main className="">
                    {draftMode().isEnabled && (
                        <a
                            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
                            href="/api/draft-mode/disable"
                        >
                            Disable preview mode
                        </a>
                    )}
                    {children}
                    {draftMode().isEnabled && <VisualEditing />}
                </main>
                
        {/*<Analytics />*/}
            </body>
        </html>
    );
}
