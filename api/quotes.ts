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

export async function getRandomQuote(): Promise<{
  content: string;
  _id: string;
  author: string;
}> {
  // https://docs.quotable.io/docs/api
try{
  const response = await axios.get(
    "https://api.quotable.io/random?maxLength=50"
  );

  return response.data;
} catch (error) {
  // Handle the error here
  console.error("Error fetching the random quote:", error);
  return {
    content: "Accepting our mortality helps us focus on what truly matters in life",
    _id: "",
    author: "Mark Manson",
  };
}
}
