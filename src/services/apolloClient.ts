import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://sa-east-1.cdn.hygraph.com/content/clczfq2yr48d601ta3s82grkk/master',
    cache: new InMemoryCache(),
})

export default client;