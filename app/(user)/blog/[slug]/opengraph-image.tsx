import { ImageResponse } from "next/og";
import {
  height,
  OpenGraphImage,
  width,
} from "@/sanity/components/OpenGraphImage";
import { getPost } from "@/lib/sanity.api";

export const runtime = "edge";
export default async function og({ params }: { params: { slug: string } }) {
  const font = fetch(new URL("@public/Inter-Bold.woff", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );
  const post = await getPost(params.slug);

  let title = post.title;
  // if (!title) {
  //   const client = createClient({
  //     projectId,
  //     dataset,
  //     apiVersion,
  //     useCdn: false,
  //   });
  //   const settings = (await client.fetch<Settings>(settingsQuery)) || {};
  //   title = settings?.ogImage?.title!;
  // }

  return new ImageResponse(
    <OpenGraphImage title={title} />,
    {
      width,
      height,
      fonts: [
        {
          name: "Inter",
          data: await font,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#alt
