const express = require("express");
const quotesRouter = require("./routes/quotes.routes");

const app = express();

const HOST = "localhost";
const PORT = 8080;

app.use("/api/", quotesRouter);

app.listen(PORT, HOST, (err) => {
    if (err) {
        return console.log(err.message);
    }

    console.log(`server has started and is running on http://${HOST}:${PORT}`)
})