import axios from "axios";

export const fetchRandomQuote = async () => {
  const response = await fetch("", {
    next: {
      revalidate: 60,
    },
  });
  const data = await response.json();
  return data;
};

export interface Quote {
  q: string;
  a: string;
}

export async function getRandomQuote(): Promise<Quote> {
  // ZenQuotes API: https://zenquotes.io/
  try {
    const response = await axios.get("https://zenquotes.io/api/quote/random/");

    // Ensure we access the first item from the response array
    const quoteData = response.data[0];

    console.log("quote", quoteData);

    // Return the quote and author in the expected format
    return {
      q: quoteData.q,
      a: quoteData.a,
    };
  } catch (error) {
    console.error("Error fetching the random quote:", error);

    // Return a fallback quote in case of an error
    return {
      q: "Accepting our mortality helps us focus on what truly matters in life.",
      a: "Mark Manson",
    };
  }
}