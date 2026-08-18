import express from "express";
import crypto from "crypto";

const app = express();
const PORT = process.env.PORT || 3000;


// 👉 middleware para leer JSON (IMPORTANTE para webhooks)
app.use(express.json());
app.post("/tn/webhook", (req, res) => {
  console.log("✅ WEBHOOK RECIBIDO");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  return res.sendStatus(200);
});

// ======================
// ENDPOINT DE PRUEBA (ya lo tenías)
app.get("/", (req, res) => {
  res.send("TN Stock Alert OK");
});
app.get("/health", (req, res) => res.send("ok"));

const ML_APP_ID = process.env.TN_APP_ID;
const ML_CLIENT_SECRET = process.env.TN_CLIENT_SECRET;
const ML_STORE_ID = process.env.TN_STORE_ID;
const ML_ACCESS_TOKEN = process.env.TN_ACCESS_TOKEN;