
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTIONS } from "../constants";
import { Quote, TranslationResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const geminiService = {
  async chat(message: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS.CHAT,
        temperature: 0.7,
      },
    });
    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  },

  async askBiography(question: string) {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [{ parts: [{ text: question }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS.BIOGRAPHY,
        temperature: 0.5,
      },
    });
    return response.text || "Les archives sont momentanément inaccessibles.";
  },

  async translateAndExplain(text: string): Promise<TranslationResult> {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: `Traduis et explique ce texte: ${text}` }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS.TRANSLATOR,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            original: { type: Type.STRING },
            translation: { type: Type.STRING },
            explanation: { type: Type.STRING },
            context: { type: Type.STRING }
          },
          required: ["original", "translation", "explanation", "context"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  },

  async getDailyWisdom(): Promise<Quote> {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: "Génère une parole de sagesse de Cheikh Ibrahim Niass." }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS.WISDOM,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING },
            source: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ["text", "source", "explanation"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  }
};
