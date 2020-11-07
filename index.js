const server = require('./api/server.js');

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  // console.log(`\n=== Server listening on port ${PORT} ===\n`);
  console.log(`Running at http://localhost:${port}`)

});
