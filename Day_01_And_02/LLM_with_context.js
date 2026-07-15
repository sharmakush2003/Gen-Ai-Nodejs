// 1. Import the tools we need
import Groq from "groq-sdk";
import dotenv from "dotenv";
import readline from "readline/promises"; // The simplified version of readline

// 2. Load our secret API key from the .env file
dotenv.config();

// 3. Connect to Groq
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// 4. Set up the terminal so we can type messages and read answers
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startChat() {
    // This array is our AI's memory. It remembers everything we say!
    let chatMemory = [];

    console.log("Chat started! Type 'exit' to stop.");

    // Loop forever until we type 'exit'
    while (true) {

        // Step 1: Wait for the user to type something
        const userInput = await terminal.question("You: ");

        // Check if we want to quit
        if (userInput === "exit") {
            console.log("Goodbye!");
            terminal.close();
            break;
        }

        // Step 2: Save the user's message into the AI's memory
        chatMemory.push({
            role: "user",
            content: userInput,
        });

        // Step 3: Send the whole memory to Groq to get an answer
        const response = await groq.chat.completions.create({
            messages: chatMemory,
            model: "llama-3.3-70b-versatile",
        });

        // Step 4: Extract the text from Groq's response and print it
        const aiAnswer = response.choices[0].message.content;
        console.log("AI: " + aiAnswer);

        // Step 5: Save the AI's answer into the memory so it remembers for next time!
        chatMemory.push({
            role: "assistant",
            content: aiAnswer,
        });

    }
}

// Run our app!
startChat();
