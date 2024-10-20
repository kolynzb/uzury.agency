"use client";
import React, { useCallback, useEffect, useState } from "react";
import {getRandomQuote, Quote} from "@/services/quotes.service";
import {getRandomJoke, Joke} from "@/services/jokes.service";
import './index.scss'
import { Banner } from '@payloadcms/ui/elements/Banner'

const baseClass = 'before-dashboard'
const BeforeDashboard: React.FC = () => {
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
  
   return <div className={baseClass}>
    {isLoading && "Loading..."}
    {/* {error && <Alert tone="critical">{error.message}</Alert>} */}
    {quote && joke && (
         <div className={`${baseClass}__content`}>
         <Banner className={`${baseClass}__banner`} type="success">
           <h4>Welcome to your dashboard!</h4>
         </Banner>
         Here&apos;s what to do next:
         <div className={`${baseClass}__joke-container`}>
           <p className={`${baseClass}__setup`}>{joke.setup}</p>
           <p className={`${baseClass}__punchline`}>{joke.punchline}</p>
         </div>
         <div className={`${baseClass}__quote`}>
           <p>&quot;{quote.q}&quot;</p>
           <p>- {quote.a}</p>
         </div>
         </div>
    )}
       

    </div>
}

export default BeforeDashboard;