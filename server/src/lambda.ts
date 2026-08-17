import { worldCups } from "./data/worldCups.js";

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(worldCups),
  };
};
