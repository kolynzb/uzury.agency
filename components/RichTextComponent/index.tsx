import React from "react";
import styles from "./styles.module.scss";
import {
  PortableTextComponents,
  PortableTextReactComponents,
} from "@portabletext/react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IoIosQuote } from "react-icons/io";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import speakingurl from "speakingurl";

import CodeBlock from "@components/blocks/CodeBlock";
import { SanityImage } from "@components/blocks/SanityImage";
import { QuoteBlock } from "@components/blocks/QuoteBlock";
import { getChildrenText } from "@lib/sanity.utils";

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
        <Heading as="h2" fontSize="4xl" id={speakingurl(headingText)}>
          {children}
        </Heading>
      );
    },
    h2: ({ children }) => {
      const headingText: string = getChildrenText({ children });
      return (
        <Text as="h3" fontSize="2xl" id={speakingurl(headingText)}>
          {children}
        </Text>
      );
    },
    h3: ({ children }) => {
      const headingText: string = getChildrenText({ children });
      return (
        <Text as="h4" fontSize="xl" id={speakingurl(headingText)}>
          {children}
        </Text>
      );
    },
    h4: ({ children }) => {
      const headingText: string = getChildrenText({ children });
      return (
        <Text as="h5" fontSize="lg" id={speakingurl(headingText)}>
          {children}
        </Text>
      );
    },
    p: ({ children }) => <Text>{children}</Text>,
    italic: ({ children }) => <Text as="i">{children}</Text>,
    blockquote: ({ children }) => (
      <Flex paddingY={1}>
        <Box as="blockquote" display="flex">
          <Box as={IoIosQuote} />
          <Text paddingLeft={2} fontSize="lg" fontWeight="semibold">
            {children}
          </Text>
        </Box>
      </Flex>
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
