require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config.js/db');
const userRoutes = require('./routes/user/UserRoute')
const ticketRoutes = require('./routes/ticket/TicketRoute')

const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

// Sync the database
db.sequelize.sync().then(() => {
  console.log('Database synced');
});

app.use('/api/user', userRoutes);
app.use('/api/ticket', ticketRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

