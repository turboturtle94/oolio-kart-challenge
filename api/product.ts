import axios from "axios";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.get(
      "https://orderfoodonline.deno.dev/api/product"
    );

    res.setHeader("Access-Control-Allow-Origin", "*"); // optional if API is only accessed client-side
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Axios error:", error);
    res.status(500).json({ error: "Failed to fetch product data" });
  }
}
