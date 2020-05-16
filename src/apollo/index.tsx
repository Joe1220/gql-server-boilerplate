import ApolloClient from "apollo-boost"

import { baseUrl } from "src/shared/config"

export default new ApolloClient({
  uri: baseUrl,
})
