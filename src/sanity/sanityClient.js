import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9ag8kux2", // Replace with your Sanity project ID
  dataset: "production", // Use your dataset name
  useCdn: true, // `true` enables faster response but may show stale data
  apiVersion: "2024-03-05", // Latest API version
});

export default client;
