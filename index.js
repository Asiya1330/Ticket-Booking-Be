require('dotenv').config()
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config.js/db');
const UserRoutes = require('./routes/user/UserRoute')
const TicketRoutes = require('./routes/ticket/TicketRoute')
const MatchRoute = require('./routes/match/MatchRoute');
const TeamRoute = require('./routes/team/TeamRoute');
const TeamMemberRoute = require('./routes/teamMember/TeamMemberRoute');
// const ticketRoutes = require('./routes/ticket/TicketRoute')



const app = express();
app.use(bodyParser.json());
app.use(cors())

// Sync the database
db.sequelize.sync().then(() => {
  console.log('Database synced');
});

app.use('/api/user', UserRoutes);
app.use('/api/ticket', TicketRoutes);
app.use('/api/match', MatchRoute);
app.use('/api/team', TeamRoute);
app.use('/api/team-member', TeamMemberRoute);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

