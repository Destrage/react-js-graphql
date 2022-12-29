import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetAllTasks from './components/getAllTasks';

const errorLink = onError(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.error(message));
});

const link = from([errorLink, new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_LINK })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GetAllTasks />
    </ApolloProvider>
  );
}

export default App;
