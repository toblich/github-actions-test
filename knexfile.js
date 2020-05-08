// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'test',
    user: 'postgres'
  },
  migrations: {
    directory: 'migrations'
  }
};
