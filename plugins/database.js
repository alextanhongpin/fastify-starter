const fp = require("fastify-plugin");
const postgres = require("postgres");

// Documentation: https://www.npmjs.com/package/postgres
const config = () => ({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 10,
  timeout: 0
});

module.exports = fp(async function(fastify, opts) {
  fastify.decorate("sql", postgres(config()));
});
