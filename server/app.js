require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`,
  { useNewUrlParser: true },
  () => console.log('Connected to DB.')
);

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(3000, () => console.log('Listening for requests on port 3000.'));
