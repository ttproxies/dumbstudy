const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5123;

// Simple middleware -- Middleware runs between the request (client) and the route handler. Therefore it is run with every request.
// Mount new middleware using .use()
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello you are on the homepage welcome welcome...")
})

app.get('/api/hai', (req, res) => {
    res.json({ message: "hai !!" });
});

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});