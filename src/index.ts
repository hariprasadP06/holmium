import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Server } from "http";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ Pong: "Hello Hono!" });
});

app.get("/platform", (c) => {
  return c.json({ platform: process.platform });
});
serve(app);

app.get("/generate", async (C) => {
  const num = Math.floor(Math.random() * 100);

  return C.json({ num });
});

console.log("Server is running on http://localhost:3000");
