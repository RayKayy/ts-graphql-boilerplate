import 'reflect-metadata';
import dotenv from 'dotenv';
import fastify from 'fastify';
// Load ENV vars
dotenv.config();

const app = fastify({
  logger: true,
});

const init = async () => {
  try {
    const res = await app.listen({
      port: parseInt(process.env.PORT || '3000', 10),
    });
    console.log(res);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

init();
