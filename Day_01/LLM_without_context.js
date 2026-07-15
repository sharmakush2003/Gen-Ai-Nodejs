import Groq from "groq-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Connect to Groq
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function mainWithoutContext() {
    
    // Send the query to Groq
    const response = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Explain how AI works in a few words",
            },
        ],
        model: "llama-3.3-70b-versatile",
    });

    // Print the AI's response
    console.log(response.choices[0]?.message?.content || "");
}

mainWithoutContext();
