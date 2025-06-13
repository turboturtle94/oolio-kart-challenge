import axios from "axios";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.post(
      "https://orderfoodonline.deno.dev/api/order",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.setHeader("Access-Control-Allow-Origin", "*"); // Optional
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Axios error:", error.message);
    res.status(500).json({ error: "Failed to submit order" });
  }
}
