module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'datafin.theworkpc.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'cla'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'pr0tekcij@'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
