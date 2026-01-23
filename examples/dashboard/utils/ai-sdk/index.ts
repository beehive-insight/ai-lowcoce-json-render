import { createDeepSeek } from "@ai-sdk/deepseek";

// console.log("log----------------", process.env.AI_Q_WEN_DEEPSEEK_API_KEY);

export const deepSeek = createDeepSeek({
  baseURL: process.env.AI_Q_WEN_URL,
  apiKey: process.env.AI_Q_WEN_DEEPSEEK_API_KEY,
});
