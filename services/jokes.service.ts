import axios from "axios";


export interface Joke {
    id: number,
    setup: string,
    punchline: string,
    type: string
    }


export async function getRandomJoke(): Promise<Joke> {

    try{
        const response = await axios.get(
            "https://official-joke-api.appspot.com/jokes/random"
        );
        return response.data;
    } catch (error) {
        // Handle the error here
        console.error("Error fetching the random quote:", error);
        return {
            "type": "general",
            "setup": "What do you call a belt made out of watches?",
            "punchline": "A waist of time.",
            "id": 4
        };
    }
}