import { defineType, defineField } from "sanity";
import { GrCodeSandbox } from "react-icons/gr";

export default defineType({
  name: "codeSandbox",
  type: "object",
  title: "Code Sandbox",
  icon: GrCodeSandbox,
  fields: [
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
});
