import { z } from "astro:content";

export const EvaluationSchema = z.object({
  executive_summary: z.object({
    best_proposal_company: z
      .string()
      .describe("The name of the company selected as having the best proposal"),
    project_type: z
      .string()
      .describe(
        "General category of the project, such as road, building, etc."
      ),
    summary: z.string().describe("Concise overview of the evaluation outcome"),
    top_candidates: z
      .array(z.string())
      .describe("Company names of the top N proposals considered"),
    total_proposals_evaluated: z
      .number()
      .int()
      .describe("Total number of proposals that were evaluated"),
    reasoning: z
      .string()
      .describe(
        "Explanation of why the best proposal was selected over the others"
      ),
  }),

  deep_dive_results: z.object({
    proposals: z
      .array(
        z.object({
          company_name: z
            .string()
            .describe("Name of the company that submitted the proposal"),
          strengths: z
            .array(z.string())
            .describe("Notable strengths and positive attributes"),
          weaknesses: z
            .array(z.string())
            .describe("Key weaknesses or limitations of the proposal"),
          compliance_issues: z
            .array(z.string())
            .nullable()
            .optional()
            .describe("Detected non-compliance or missing regulatory elements"),
          estimated_durability_years: z
            .number()
            .int()
            .nullable()
            .optional()
            .describe(
              "Expected durability of the proposed infrastructure in years"
            ),
          expected_total_cost: z
            .number()
            .nullable()
            .optional()
            .describe("Projected total cost of implementation, if available"),
          notes: z
            .string()
            .describe("Additional evaluator comments or remarks"),
        })
      )
      .describe(
        "Detailed evaluations of the top-ranked proposals, ordered from best to worst"
      ),
  }),
});

export type Evaluation = z.infer<typeof EvaluationSchema>;
