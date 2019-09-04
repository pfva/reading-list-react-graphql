# reading-list-react-graphql

---

- This is a small personal reading list app

- Built with React and GraphQL (with Apollo) on the client side

- And with GraphQL, Node.js and Express on the server side

- Connected to a cloud-based DB hosted on MongoDB Atlas

## Get started

First, run npm install in the `root`, `server` and `client` directories:

```
npm i
```

Then, cd into `server` and run:

```
nodemon app
```

to start the GraphQL server.

Then, cd into `client` and run:

```
npm start
```

You need a personal instance of MongoDB Atlas, and save your information in a .env file inside the `server` directory so that the variables DB_USER, DB_PASSWORD and DB_HOST are available to the `server/app.js` file.
