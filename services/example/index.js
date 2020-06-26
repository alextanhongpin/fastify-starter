"use strict";

module.exports = function(fastify, opts, next) {
  fastify.get("/example", function(request, reply) {
    reply.send("this is an example: " + fastify.someSupport());
  });

  const greetOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            hello: { type: "string" }
          }
        }
      }
    }
  };

  fastify.get("/greet", greetOpts, async (request, reply) => {
    return {
      hello: "world"
    };
  });

  next();
};

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
