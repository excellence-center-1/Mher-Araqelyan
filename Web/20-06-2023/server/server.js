const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydb',
  password: 'mypass',
  port: 5432, // Default PostgreSQL port
});

const typeDefs = gql`
  type User {
    name: String!
    lastname: String!
    email: String!
    pass: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!,lastname: String!, email: String!, pass: String!): User!
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users');
      client.release();
      return result.rows;
    },
  },
  Mutation: {
    createUser: async (_, { name, lastname, email,pass }) => {
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO users (name,lastname, email,pass) VALUES ($1, $2, $3, $4) RETURNING *',
        [name,lastname, email,pass]
      );
      client.release();
      return result.rows[0];
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  const port = 4000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
  });
};

startServer().catch((err) => console.error('Error starting server:', err));