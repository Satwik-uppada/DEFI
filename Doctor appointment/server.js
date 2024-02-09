const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests to interact with the smart contract
app.post('/add-patient', (req, res) => {
  // Implement code to interact with the smart contract
});

app.get('/get-patient/:id', (req, res) => {
  const patientId = req.params.id;
  // Implement code to interact with the smart contract and retrieve patient data
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
