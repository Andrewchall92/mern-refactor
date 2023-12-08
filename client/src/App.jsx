import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // replace with your server's URI
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;