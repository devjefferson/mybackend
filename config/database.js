const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse("postgres://strapi:strapi123@strapi.cf7dn4yo95ff.sa-east-1.rds.amazonaws.com:5432/strapi_bd");

  return {
  connection: {
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
  }
}
