import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, Code, Flex,Text } from "@sanity/ui";
import {
  DashboardWidgetContainer,
  DashboardWidget,
  LayoutConfig,
} from "@sanity/dashboard";
import { getRandomQuote } from "../../../api/quotes";

function Quote() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [quote, setQuote] = useState<{
    content: string;
    _id: string;
    author: string;
  }>();

  const getQuote = useCallback(() => {
    setIsLoading(true);
    getRandomQuote()
      .then((response: { content: string; _id: string; author: string }) => {
        setQuote(response);
      })
      .catch((e: Error) => setError(e))
      .finally(() => setIsLoading(false));
  }, [setError, setIsLoading]);

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <DashboardWidgetContainer
      header="Random Quote"
      footer={
        <Button
          style={{ width: "100%" }}
          paddingX={2}
          paddingY={4}
          mode="bleed"
          tone="primary"
          text="Get New Quote"
          loading={isLoading}
          onClick={getQuote}
        />
      }
    >
      {error && (
        <Card paddingX={3} paddingY={4} tone="critical">
          <Code>{JSON.stringify(error, null, 2)}</Code>
        </Card>
      )}
      {!error &&   <Card>
            <Text>&quot;{quote?.content}</Text>
            <a
              target="_blank"
              href={`https://quotable.io/quotes/${quote?._id}`}
            >
              {quote?.author}
            </a>
          </Card>}
    </DashboardWidgetContainer>
  );
}

export function randomQuoteWidget(
  config: { layout?: LayoutConfig } = {}
): DashboardWidget {
  return {
    name: "random-quote-widget",
    component: Quote,
    layout: config.layout ?? { width: "medium" },
  };
}
