import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1 id="main-heading">Sci-Fi and Fantasy Reading List</h1>
        <p id="main-paragraph">(in no particular order)</p>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
