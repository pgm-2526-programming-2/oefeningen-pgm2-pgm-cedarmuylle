const { getData } = require("../utils/file.utils")

function getAllQuotes(req, res) {
    try {
        res.json(getData("quotes.json"));
    } catch (error) {
        res.status(500);
        res.send(`Er ging iets mis: ${error.message}`);
    }
};

function getQuoteById(req, res) {
    const { id } = req.params;
    const quotes = getData("quotes.json");
    const result = quotes.find(quote => quote.id == id);
    res.json(result);
}

module.exports = { getAllQuotes, getQuoteById };