/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import configPromise from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import './custom.scss'
import { importMap } from './admin/importMap'
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
type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout importMap={importMap} config={configPromise}>
    {children}
  </RootLayout>
)

export default Layout
