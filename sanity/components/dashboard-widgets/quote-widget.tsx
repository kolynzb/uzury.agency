import React, { useCallback, useEffect, useState } from "react";
import {Box, Button, Card, Code, Flex, Spinner, Stack, Text} from "@sanity/ui";
import {
  DashboardWidgetContainer,
  DashboardWidget,
  LayoutConfig,
} from "@sanity/dashboard";
import {getRandomQuote, Quote} from "@/services/quotes.service";
import {getRandomJoke, Joke} from "@/services/jokes.service";

function QuoteAndJoke() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [quote, setQuote] = useState<Quote>();
  const [joke, setJoke] = useState<Joke>();

  const fetchQuoteAndJoke = useCallback(() => {
    setIsLoading(true);
    Promise.all([getRandomQuote(), getRandomJoke()])
        .then(([quoteResponse, jokeResponse]) => {
          setQuote(quoteResponse);
          setJoke(jokeResponse);
        })
        .catch((e: Error) => setError(e))
        .finally(() => setIsLoading(false));
  }, [setError, setIsLoading]);

  useEffect(() => {
    fetchQuoteAndJoke();
  }, [fetchQuoteAndJoke]);

  return (
      <DashboardWidgetContainer
          header="Random Quote and Joke"
          footer={
            <Button
                style={{ width: "100%" }}
                paddingX={2}
                paddingY={4}
                mode="bleed"
                tone="primary"
                text="Get New Quote and Joke"
                loading={isLoading}
                onClick={fetchQuoteAndJoke}
            />
          }
      >
          {isLoading ? (
              <Flex justify="center" align="center" padding={4}>
                  <Spinner muted />
              </Flex>
          ) : error ? (
              <Card padding={4} tone="critical">
                  <Text align="center">Oops! Something went wrong. Try again later.</Text>
              </Card>
          ) : (
              <Stack space={5} padding={4}>
                  {quote && (
                      <Card padding={4} shadow={1} radius={2} tone="positive">
                          <Text align="center" size={2} weight="bold">
                              &quot; {quote.q}&quot;
                          </Text>
                          <Text align="right" size={1} muted>
                              — {quote.a}
                          </Text>
                      </Card>
                  )}
                  {joke && (
                      <Card padding={4} shadow={1} radius={2} tone="caution">
                          <Text align="center" size={2} weight="bold">
                              {joke.setup}
                          </Text>
                          <Box marginTop={2}>
                              <Text align="center" size={2} muted>
                                  {joke.punchline}
                              </Text>
                          </Box>
                      </Card>
                  )}
              </Stack>
          )}
      </DashboardWidgetContainer>
  );
}
export function randomQuoteWidget(
  config: { layout?: LayoutConfig } = {}
): DashboardWidget {
  return {
    name: "random-quote-widget",
    component: QuoteAndJoke,
    layout: config.layout ?? { width: "medium" },
  };
}

// https://publicapi.dev/category/entertainment