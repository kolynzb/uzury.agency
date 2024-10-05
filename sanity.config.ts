"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import StudioLogo from "./components/studio/StudioLogo";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { codeInput } from "@sanity/code-input";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { randomQuoteWidget } from "./sanity/components/dashboard-widgets/quote-widget";
// import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { assist } from "@sanity/assist";
import { myTheme } from "./lib/sanity.theme";
import { table } from '@sanity/table';

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  title: "Kolynzb Blog",
  subtitle: "Login To Manage The Blog",
  studio: {
    components: {
      logo: StudioLogo,
    },
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    unsplashImageAsset(),
    scheduledPublishing(),
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
    // giphyAssetSourcePlugin({
    //   apiKey: process.env.NEXT_PUBLIC_GIPHY_API_KEY as string
    // }),
  ],
});
