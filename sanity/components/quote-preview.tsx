import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";

interface PreviewQuoteProps extends PreviewProps {
  url: string;
  text: string;
  author: string;
}

export function QuotePreview(props: PreviewQuoteProps) {
  const { text, author, url } = props;
  return (
    <Flex
      paddingY={1}
      as="figure"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 5px",
        justifyContent: "space-between",
        alignItems: "center",
        borderLeft: "solid 4px #4C4C4C",
      }}
    >
      <Text
        style={{
          marginBottom: "10px",
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "lighter",
        }}
      >
        &quot; {text}&quot;
      </Text>
      {author && (
        <Text
          as="figcaption"
          style={{
            fontWeight: "bold",
          }}
        >
          {author}
        </Text>
      )}
    </Flex>
  );
}
