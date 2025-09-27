'use server';

/**
 * @fileOverview A counselor recommendation AI agent based on chat history.
 *
 * - recommendCounselor - A function that recommends a counselor based on chat history.
 * - CounselorRecommendationInput - The input type for the recommendCounselor function.
 * - CounselorRecommendationOutput - The return type for the recommendCounselor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CounselorRecommendationInputSchema = z.object({
  chatHistory: z
    .string()
    .describe('The chat history between the student and the AI companion.'),
});
export type CounselorRecommendationInput = z.infer<
  typeof CounselorRecommendationInputSchema
>;

const CounselorRecommendationOutputSchema = z.object({
  counselorRecommendation: z
    .string()
    .describe(
      'The name of the counselor recommended based on the chat history.'
    ),
  reasoning: z
    .string()
    .describe('The reasoning behind the counselor recommendation.'),
});
export type CounselorRecommendationOutput = z.infer<
  typeof CounselorRecommendationOutputSchema
>;

export async function recommendCounselor(
  input: CounselorRecommendationInput
): Promise<CounselorRecommendationOutput> {
  return recommendCounselorFlow(input);
}

const recommendCounselorPrompt = ai.definePrompt({
  name: 'recommendCounselorPrompt',
  input: {schema: CounselorRecommendationInputSchema},
  output: {schema: CounselorRecommendationOutputSchema},
  prompt: `You are an AI assistant designed to recommend a counselor to students based on their chat history with an AI companion.

  Given the following chat history, please recommend a counselor and explain your reasoning.

  Chat History: {{{chatHistory}}}

  Please provide the counselor recommendation and reasoning in the following format:

  Counselor Recommendation: [Counselor Name]
  Reasoning: [Explanation]`,
});

const recommendCounselorFlow = ai.defineFlow(
  {
    name: 'recommendCounselorFlow',
    inputSchema: CounselorRecommendationInputSchema,
    outputSchema: CounselorRecommendationOutputSchema,
  },
  async input => {
    const {output} = await recommendCounselorPrompt(input);
    return output!;
  }
);
