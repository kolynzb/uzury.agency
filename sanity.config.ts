"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, basePath, dataset, projectId} from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import StudioLogo from "./components/studio/studio-logo";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { codeInput } from "@sanity/code-input";
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { randomQuoteWidget } from "./sanity/components/dashboard-widgets/quote-widget";
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { assist } from "@sanity/assist";
import { myTheme } from "./lib/sanity.theme";
import { table } from '@sanity/table';
import {siteConfig} from "@/config/site";
import {singletonPlugin} from "@/sanity/plugins/singleton-plugin";
import {locate} from "@/sanity/plugins/locate";
import {presentationTool} from "sanity/presentation";
import {debugSecrets} from "@sanity/preview-url-secret/sanity-plugin-debug-secrets";

// TODO: ADD workspaces https://www.sanity.io/docs/workspaces
export default defineConfig({
  basePath,
  projectId,
  dataset,
  schema,
  title: ` ${siteConfig.name} Africa`,
  subtitle: `Login To the ${siteConfig.name} CMS`,
  icon: StudioLogo,
  logo: StudioLogo,
  studio: {
    components: {
      logo: StudioLogo,
    },
  },
  theme: myTheme,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    unsplashImageAsset(),
    codeInput(),
    assist(),
    table(),
    dashboardTool({
      widgets: [
        randomQuoteWidget(),
        documentListWidget({
          title: "Last Edited",
          order: "_updatedAt desc",
          types: ["post", "author"],
        }),
        projectInfoWidget(),
        projectUsersWidget(),
        sanityTutorialsWidget(),
      ],
    }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/services/draft",
        },
      },
    }),
    singletonPlugin({types: ["settings"]}),
    giphyAssetSourcePlugin({
      apiKey: process.env.NEXT_PUBLIC_GIPHY_API_KEY as string
    }),
    // The remaining plugins are only loaded in dev mode
    process.env.NODE_ENV !== "production" && debugSecrets(),
  ],
});
