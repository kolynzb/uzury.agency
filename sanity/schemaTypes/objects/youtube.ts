import { defineField, defineType } from "sanity";
import { YouTubePreview } from "../../components/youtube-preview";
import { FiYoutube } from "react-icons/fi";

export default defineType({
  name: "youtube",
  title: "Youtube",
  icon: FiYoutube,
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Enter the Youtube Url",
    }),
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  components: {
    preview: YouTubePreview as any,
  },
});

// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
