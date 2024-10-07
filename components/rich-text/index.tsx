import React from "react";
import styles from "./styles.module.scss";
import {
  PortableTextComponents,
  PortableTextReactComponents,
} from "@portabletext/react";
import { IoIosQuote } from "react-icons/io";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import speakingurl from "speakingurl";

import CodeBlock from "@/components/blocks/code-block";
import { SanityImage } from "@/components/blocks/sanity-image";
import { QuoteBlock } from "@/components/blocks/quote-block";
import { getChildrenText } from "@/utils/sanity";

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: (props) => {
      console.log(props);
      const { value } = props;
      return <SanityImage {...value} />;
    },
    break: () => <hr />,
    code: ({ value }) => <CodeBlock data={value} />,
    quote: (props) => {
      console.log("Quote Props", props);
      const { value } = props;

      return <QuoteBlock {...value} />;
    },
    youtube: ({ value }) => (
      <figure className={styles.yt_player}>
        <ReactPlayer url={value.url} />
      </figure>
    ),
    codeSandbox: ({ value }) => (
      <iframe
        title="CodeSandbox"
        loading="lazy"
        src={value.url}
        className="-mx-4 h-[400px] w-full overflow-hidden rounded border-0"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    ),
  },
  list: {
    bullet: ({ children }) => <ul className={styles.bullet}>{children}</ul>,
    number: ({ children }) => <ol className={styles.number}>{children}</ol>,
  },
  block: {
    h1: ({ children }) => {
      const headingText: string = getChildrenText({ children });
      return (
        <h2 className="mil-mb-50"  id={speakingurl(headingText)}>
          {children}
        </h2>
      );
    },
    h2: ({ children }) => {
      const headingText: string = getChildrenText({ children });
      return (
        < h3 id={speakingurl(headingText)}>
          {children}
        </h3>
      );
    },
    h3: ({ children }) => {
      const headingText: string = getChildrenText({ children });
      return (
        < h4 id={speakingurl(headingText)}>
          {children}
        </h4>
      );
    },
    h4: ({ children }) => {
      const headingText: string = getChildrenText({ children });
      return (
        < h5  id={speakingurl(headingText)}>
          {children}
        </h5>
      );
    },
    p: ({ children }) => <p className="mil-mb-30">{children}</p>,
    italic: ({ children }) => <i >{children}</i>,
    blockquote: ({ children }) => (
        <div>
          <blockquote>
            <p>
              {children}
            </p>
            </blockquote>
        </div>
),
},

marks: {
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          className={styles.link}
          href={value?.href}
          rel={rel}
          target="_blank"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => <code className={styles.code}>{children}</code>,
  },
};

// https://github.com/sk400/zaplin-blog/blob/main/components/RichTextComponents.jsx
// https://www.sanity.io/plugins/react-portable-text
