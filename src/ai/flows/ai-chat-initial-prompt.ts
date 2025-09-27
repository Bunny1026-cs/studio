'use server';

/**
 * @fileOverview This file defines a Genkit flow for initiating a conversation with an AI companion chat.
 *
 * It includes:
 * - `aiChatInitialPrompt`: An async function that takes a user prompt as input and returns the AI's response.
 * - `AIChatInitialPromptInput`: The input type for the `aiChatInitialPrompt` function, which is a simple string.
 * - `AIChatInitialPromptOutput`: The output type for the `aiChatInitialPrompt` function, which is also a string representing the AI's response.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatInitialPromptInputSchema = z.object({
  prompt: z.string().describe('The initial prompt from the user to start the conversation.'),
});
export type AIChatInitialPromptInput = z.infer<typeof AIChatInitialPromptInputSchema>;

const AIChatInitialPromptOutputSchema = z.object({
  response: z.string().describe('The AI companion\'s response to the initial prompt.'),
});
export type AIChatInitialPromptOutput = z.infer<typeof AIChatInitialPromptOutputSchema>;

export async function aiChatInitialPrompt(input: AIChatInitialPromptInput): Promise<AIChatInitialPromptOutput> {
  return aiChatInitialPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatInitialPromptPrompt',
  input: {schema: AIChatInitialPromptInputSchema},
  output: {schema: AIChatInitialPromptOutputSchema},
  prompt: `You are a helpful AI companion designed to support students. A student has provided the following initial prompt: {{{prompt}}}. Please provide a helpful and supportive response.`,
});

const aiChatInitialPromptFlow = ai.defineFlow(
  {
    name: 'aiChatInitialPromptFlow',
    inputSchema: AIChatInitialPromptInputSchema,
    outputSchema: AIChatInitialPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
