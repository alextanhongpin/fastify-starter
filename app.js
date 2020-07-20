"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");

module.exports = async function(fastify, opts) {
  // Place here your custom code!
  await fastify.register(require("fastify-express"));
  fastify.register(require("fastify-helmet"), {
    hidePoweredBy: { setTo: "PHP 7.0.0" }
  });
  fastify.register(require("fastify-cors"));

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts)
  });

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "services"),
    options: Object.assign({}, opts)
  });
};
