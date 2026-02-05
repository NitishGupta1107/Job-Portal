import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';

const app = express();

// connect database
await connectDB();

app.use(cors());

// IMPORTANT: webhook route FIRST with RAW body
app.post(
  "/webhooks",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);

// normal JSON parser AFTER webhook
app.use(express.json());

app.get('/', (req,res)=>{
  res.send("Backend is working")
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});
