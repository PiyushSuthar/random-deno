import { createApp } from "https://deno.land/x/servest/mod.ts";
import { Navbar } from "./htmlElements.ts";
import { HtmlHeader } from "./constant.ts";
import { AboutRoutes } from "./about.ts";
import HtmlWrapper from "./HTML/HTMLWrapper.ts";

const app = createApp();

app.get("/", async (req) => {
  const query = req.query.get("name");
  await req.respond({
    status: 200,
    headers: new Headers({
     ...HtmlHeader 
    }),
    body: HtmlWrapper(`<h1>Ciao ${query}</h1>`),
  });
});

app.route("/about",AboutRoutes())

app.listen({ port: 8080 });
