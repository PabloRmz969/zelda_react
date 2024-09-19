import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import "react-tooltip/dist/react-tooltip.css";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://zelda.fanapis.com/api/graphql/",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  
});

export const ZeldaApp = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    </>
  );
};
