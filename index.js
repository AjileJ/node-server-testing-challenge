require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 2233;
server.listen(port, () => console.log(`\n** Server is up and functioning on port ${port} to jordan's standards! **\n`));