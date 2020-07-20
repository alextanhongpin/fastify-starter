"use strict";

module.exports = async function(fastify, opts) {
  fastify.get("/", async function(request, reply) {
    return "this is an example: " + fastify.someSupport();
  });

  const greetOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            hello: { type: "string" },
            sum: { type: "integer" }
          }
        }
      }
    }
  };

  fastify.get("/greet", greetOpts, async (request, reply) => {
    const [row] = await fastify.sql`SELECT 1 + 1 AS sum`;
    const { sum } = row;
    return {
      hello: "world",
      sum
    };
  });
};
