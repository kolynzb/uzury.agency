import { Box, Flex,  Text } from "@chakra-ui/react";
import { IoIosQuote } from "react-icons/io";

interface Props {
  text: string;
  author: string;
  url: string;
}

export const QuoteBlock = (props: Props) => {
  const { text, author, url } = props;

  return (
    <Flex paddingY={1} as="figure">
      <Box as="blockquote" display="flex" cite={url}>
        <Box as={IoIosQuote} />
        <Text paddingLeft={2} fontSize="lg" fontWeight="semibold">
          {text}
        </Text>
        <Box as={IoIosQuote} />
        {author && <Text as="figcaption">{author}</Text>}
      </Box>
    </Flex>
  );
};
