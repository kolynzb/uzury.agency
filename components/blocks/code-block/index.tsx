import copyToClipboard from "../../tools/CopyToClipboard";
import { Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";

import { Highlight, themes } from "prism-react-renderer";
import styles from "./styles.module.scss";
import { Button } from "../../button";
import type { CodeInputValue } from "@sanity/code-input";
interface CodeBlockProps {
  data: CodeInputValue;
}

const CodeBlock = ({ data }: CodeBlockProps) => {
  const [isCopied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const resolvedTheme =
    typeof window !== "undefined"
      ? window.localStorage.getItem("color-mode")
      : null;

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const checkLine = (index: number) =>
    typeof highlightedLines === "number" && highlightedLines === index;

  // run useEffect, to make sure that correct theme is rendered
  useEffect(() => {
    setMounted(true);
  }, []);
   if (!mounted) return null; 
  const { code, filename, language, highlightedLines } = data;
  if (code) return null


  const codeTheme = resolvedTheme === "Dark" ? themes.vsDark : themes.github;

  return (
    <div className={styles.code_block__container}>
      <div className={styles.header_container}>
        <div className={styles.header}>
          {filename ? <p className={styles.filename}>{filename}</p> : null}
          {language !== "batchfile" ? (
            <p>
              lang: <span className={styles.lang}>{language}</span>
            </p>
          ) : null}
        </div>

        <Button
          variant="outline"
          onClick={async () => {
            await copyToClipboard(code!);
            copy();
          }}
          className={styles.copy_btn}
        >
          {isCopied ? (
            <Check
              className={styles.icon}
              width={30}
              height={30}
              color={resolvedTheme === "Light" ? "white" : "black"}
            />
          ) : (
            <Copy
              className={styles.icon}
              width={30}
              height={30}
              color={resolvedTheme === "Light" ? "white" : "black"}
            />
          )}
        </Button>
      </div>
      <div
        className={styles.code_container}
        style={{
          backgroundColor: resolvedTheme === "Light" ? "white" : "#1E1E1E",
        }}
      >
        <Highlight theme={codeTheme} code={code!} language={language!}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} ${styles.pre}`} style={style}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                if (checkLine(i + 1)) {
                  lineProps.className = `${lineProps.className} ${styles.line}`;
                }
                return (
                  <div key={i} {...lineProps}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
//  https://www.dwe.fi/Blog/posts/code-blocks-in-sanity
//  https://github.com/ogdakke/portfoliov2/blob/main/components/imageComponent.tsx
//https://github.dev/SimeonGriggs/simeonGriggs