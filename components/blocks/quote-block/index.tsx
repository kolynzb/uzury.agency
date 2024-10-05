import { IoIosQuote } from "react-icons/io";

interface Props {
  text: string;
  author: string;
  url: string;
}

export const QuoteBlock = (props: Props) => {
  const { text, author, url } = props;

  return (

      <blockquote  className="mil-mb-60" cite={url}>
        {/*<Box as={IoIosQuote} />*/}
        <p className="mil-text-lg mil-mb-20">
          {text}
        </p>
        {/*<Box as={IoIosQuote}/>*/}

        {author && <span className="mil-h4 mil-font-3 mil-accent">
                  - &nbsp;<figcaption>{author}</figcaption>
                </span>}
      </blockquote>

  );
};
