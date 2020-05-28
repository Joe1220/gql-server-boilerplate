import ApolloClient from "apollo-boost"
import fetch from "cross-fetch"

import { baseUrl } from "src/shared/config"

export default new ApolloClient({
  uri: baseUrl,
  fetch,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors)
    console.log("networkError", networkError)
  },
})
