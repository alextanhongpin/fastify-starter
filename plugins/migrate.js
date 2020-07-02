const fp = require("fastify-plugin");
const migrate = require("db-migrate");

module.exports = fp(async function(fastify, opts, next) {
  const instance = migrate.getInstance(true);
  await instance.up();

  next();
});
