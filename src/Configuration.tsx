import axios from "axios";
// require('dotenv').config();    NOT NEEDED. ADD: REACT_APP_myvariable

export const fetchData = async (input: string) => {
    const response = await axios.post("https://api.openai.com/v1/completions", 
    {   // Parameters
        prompt: `Complete this sentence: ${input}`,
        model: process.env.REACT_APP_model,
        max_tokens: 50,
        n: 1,
        stop: ".",
    },
    {   // Headers
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
    }
    );

    return response.data.choices[0].text;
};