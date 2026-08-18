import express from "express";
import crypto from "crypto";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Webhook de notificaciones de MercadoLibre
app.post("/ml/webhook", (req, res) => {
  console.log("✅ WEBHOOK RECIBIDO");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  return res.sendStatus(200);
});

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("Proyecto ML - Mensajes Automáticos OK");
});

app.get("/health", (req, res) => res.send("ok"));

const ML_APP_ID = process.env.ML_APP_ID;
const ML_CLIENT_SECRET = process.env.ML_CLIENT_SECRET;
const ML_ACCESS_TOKEN = process.env.ML_ACCESS_TOKEN;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
