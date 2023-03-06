import { useState } from "react";
import { fetchData } from "./Configuration";

export const ChattyApp = () => {
    const [input, setInput] = useState("");
    const [completedSentence,  setCompletedSentence] = useState("");

    async function handleClick() {
        try {
            const newSentence = await fetchData(input);
            setCompletedSentence(newSentence);
        } catch (error) {
            console.error(error);
        }
    }

    return ( 
    <div className="container">
        <h2>Tell me something, and I'll tell you more</h2>
        <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={5}
            placeholder="Type in some words and I'll finish the rest..." /> 
        <button className="button" onClick={handleClick}>
            Complete Sentence
        </button>
        {
            completedSentence && <p>Completed sentence: {completedSentence}</p>
        }
    </div>
    )
}