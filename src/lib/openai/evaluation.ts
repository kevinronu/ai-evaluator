import { zodTextFormat } from "openai/helpers/zod";

import { EvaluationSchema, type Evaluation } from "./structured-output";
import { openai } from "./client";

const TOP_N = 5;

export async function getEvaluation(
  projectName: string,
  storeID: string,
  language: string
): Promise<Evaluation> {
  if (projectName === "") {
    throw new Error("Missing projectName");
  }

  if (storeID === "") {
    throw new Error("Missing storeID");
  }

  if (language === "") {
    throw new Error("Missing language");
  }

  const prompt = `Evaluate the uploaded proposals for the project "${projectName}". Identify the top ${TOP_N} proposals and determine the most technically appropriate one. Respond in ${language}.`;

  const instructions = `You are a senior evaluator for public infrastructure and construction projects.
Always respond in ${language}.

You must analyze all received proposals and generate a structured evaluation in JSON format following the provided schema. Your evaluation must:
1. Objectively compare the proposals based on relevant technical and qualitative factors.
2. Determine the most suitable proposal among the top ${TOP_N}, considering strengths, weaknesses, and compliance with standards.
3. Output a concise executive summary including the winning company name, the type of project, and justification.
4. Provide a deep dive section with a breakdown of the top ${TOP_N} proposals, including positive and negative aspects, optional compliance issues, and estimates for durability and cost when applicable.

You are not limited to one type of project. Your evaluation must work for any proposal, from large-scale infrastructure (e.g., roads, bridges, buildings) to small interventions (e.g., repainting, signage installation, repairs).
All fields in the schema must be filled. Use null where a value is unknown or not applicable. The evaluation should allow government decision-makers to understand the rationale behind your judgment, even if they are not technical experts.
Do not repeat the prompt or rephrase it. Your only output must be a valid JSON structure matching the schema.
When identifying proposals, always use the company name if it can be determined from the content. Only fall back to using the filename when no company name is available.`;

  const response = await openai.responses.create({
    input: prompt,
    model: "gpt-4.1",
    instructions: instructions,
    tools: [
      {
        type: "file_search",
        vector_store_ids: [storeID],
      },
    ],
    tool_choice: "auto",
    text: {
      format: zodTextFormat(EvaluationSchema, "evaluation"),
    },
  });

  return EvaluationSchema.parse(JSON.parse(response.output_text));
}
