module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6b8d30b8bbc1e42ea9639673ca9b5fc0'),
    },
  },
});
