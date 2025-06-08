import type { APIRoute } from "astro";

import { openai } from "../../lib/openai/client";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const storeName = formData.get("storeName");

  if (!storeName || typeof storeName !== "string") {
    return new Response(JSON.stringify({ error: "Invalid store name" }), {
      status: 400,
    });
  }

  const files = formData.getAll("files") as File[];
  if (!files || files.length === 0) {
    return new Response(JSON.stringify({ error: "No files received" }), {
      status: 400,
    });
  }

  const vectorStore = await openai.vectorStores.create({
    name: storeName,
  });

  await openai.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, {
    files: files,
  });

  return new Response(
    JSON.stringify({
      vector_store_id: vectorStore.id,
      vector_store_name: vectorStore.name,
    }),
    { status: 200 }
  );
};
