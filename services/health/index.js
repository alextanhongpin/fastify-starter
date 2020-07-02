"use strict";

const ms = require("ms");
const startedAt = Date.now();

module.exports = function(fastify, opts, next) {
  const healthOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            uptime: { type: "string" }
          }
        }
      }
    }
  };

  // NOTE: If we use this format, it needs to be an async function -
  // else the request will hang.
  fastify.get("/health", healthOpts, async (request, reply) => {
    return {
      uptime: ms(Date.now() - startedAt)
    };
  });

  next();
};
