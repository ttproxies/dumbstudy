const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5123;

// Simple middleware -- Middleware runs between the request (client) and the route handler. Therefore it is run with every request.
// Mount new middleware using .use()
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect("https://localhost:5173")
})

app.get('/api/hai', (req, res) => {
    res.json({ message: "server message hai helo !!" });
});

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});