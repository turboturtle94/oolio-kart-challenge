const axios = require("axios");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.get(
      "https://orderfoodonline.deno.dev/api/product"
    );

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch product data" });
  }
};
