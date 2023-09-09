import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, Input } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function Main() {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isGenerating, setGeneratingState] = useState(false);

  useEffect(() => {
    // This code will execute whenever chatHistory changes.
    console.log(chatHistory, "chat history");
  }, [chatHistory]);

  // async function getReplyFromAI() {
  //   if (!userInput || isGenerating) {
  //     toast.error("Input can't be empty");
  //     return;
  //   }

  //   setGeneratingState(true);
  //   console.log("userInput", userInput);
  //   const completion = await openai.chat.completions.create({
  //     messages: [...chatHistory, { role: 'user', content: userInput }],
  //     model: 'gpt-3.5-turbo',
  //   });

  //   const response = completion.choices[0]?.message?.content;
  //   const dataObj = { role: 'user', content: userInput };
  //   const aiResponseObj = { role: 'assistant', content: response };
  //   setChatHistory((prevChatHistory) => [...prevChatHistory, dataObj, aiResponseObj]);
  //   setUserInput("");
  //   setGeneratingState(false);
  // }

  async function getReplyFromAI() {
    if (!userInput || isGenerating) {
      // Display an error message if the input is empty
      toast.error("Message can't be empty");
      return;
    }

    // Display user message immediately
    const dataObj = { role: "user", content: userInput };
    setChatHistory((prevChatHistory) => [...prevChatHistory, dataObj]);

    setGeneratingState(true);
    console.log("userInput", userInput);
    const completion = await openai.chat.completions.create({
      messages: [...chatHistory, { role: "user", content: userInput }],
      model: "gpt-3.5-turbo",
    });

    const response = completion.choices[0]?.message?.content;
    const aiResponseObj = { role: "assistant", content: response };
    setChatHistory((prevChatHistory) => [...prevChatHistory, aiResponseObj]);

    setUserInput("");
    setGeneratingState(false);
  }

  return (
    <div className="main-chatbot" style={{ width: "100%", height: "100vh", overflow:"hidden" }}>
      <div
        className="cb-inner-content"
        style={{ width: "1300px", margin: "0 auto", padding: "60px 0" }}
      >
        <div className="cb-title">
          <h1
            style={{ textAlign: "center", fontSize: "35px", fontWeight: "500" }}
          >
            Chat with Compassion: Your Mental Health Support, Just a Message
            Away
          </h1>
          <p
            style={{ textAlign: "center", marginTop: "10px", fontSize: "20px" }}
          >
            MindAIgnite's Virtual Companion: A Safe Space for Your Mental
            Well-Being Journey
          </p>
        </div>

        <Box
          className="chat-history"
          padding="30px"
          width="80%"
          height="450px"
          overflowY="auto"
          borderRadius="15px"
          style={{
            margin: "50px auto 20px",
            background: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(20px)",
            boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 30px",
          }}
        >
          {chatHistory.length === 0 ? (
            <p>
              "Chatbot Awaits Your Thoughts, Like a Friendly Lantern in the
              Night"
            </p>
          ) : (
            chatHistory?.map((message, index) => (
              <Box
                key={uuidv4()}
                marginBottom="10px"
                display="flex"
                justifyContent={
                  message.role === "user" ? "flex-end" : "flex-start"
                }
              >
                <Box
                  padding="15px 20px"
                  borderRadius="20px"
                  backgroundColor={
                    message.role === "user"
                      ? "rgb(114 119 255)"
                      : "rgb(37 203 126)"
                  }
                  color="white"
                  maxWidth="70%"
                >
                  {message.content}
                </Box>
              </Box>
            ))
          )}
        </Box>

        <Box
          className="user-input"
          display="flex"
          alignItems="center"
          style={{ width: "80%", margin: "0 auto" }}
        >
          <Input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            padding={8}
            onChange={(e) => setUserInput(e.target.value)}
            marginRight="10px"
            disabled={isGenerating}
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(20px)",
              boxShadow: "rgba(0, 0, 0, 0.2) 1px 8px 14px",
              width: "85%",
            }}
          />
          <Button
            style={{
              boxShadow: "rgba(0, 0, 0, 0.2) 1px 8px 14px",
              backgroundColor: "rgb(114 119 255)",
              color: "#fff",
              width: "15%",
            }}
            padding={8}
            onClick={getReplyFromAI}
            isLoading={isGenerating}
            disabled={!userInput || isGenerating}
          >
            {isGenerating ? "Sending..." : "Send"}
          </Button>
        </Box>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Main;
