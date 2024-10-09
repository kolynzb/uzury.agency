import {siteConfig} from "@/config/site";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: `CMS - ${ siteConfig.name}`,
  description: 'Visualize and We create',
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/studio/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/favicon/studio/safari-pinned-tab.svg",
    },
    {
      rel: "icon",
      url: "/favicon/studio/favicon-32x32.png",
    },
    {
      rel: "icon",
      url: "/favicon/studio/favicon-16x16.png",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
