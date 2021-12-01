module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd5c773ade99578b70feae151996be348'),
  },
});
