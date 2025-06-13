const axios = require("axios");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.post(
      "https://orderfoodonline.deno.dev/api/order",
      req.body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error("Axios error:", err.message);
    res.status(500).json({ error: "Failed to submit order" });
  }
};
