# GraphQL and Apollo Client by Example
## Parts 1 - 5

	• npx create-react-app hello-apollo
	• cd hello-apollo
	• yarn add  react-apollo  apollo-boost  apollo-link-state  graphql  graphql-tag

 https://codeburst.io/graphql-and-apollo-client-by-example-part-1-3e0aec3eea71   
[GitHub for Part 6 .. (boost-apollo)](https://github.com/gzbit/boost-apollo.git)

In order to avoid the error that *@client is detetcted but no resolvers are declared*, you have to adjust the client consructor in ***/src/index.js*** and add an empty object for resolvers:

	const client = new ApolloClient({
		cache,
		link: withClientState({ resolvers, defaults, cache, typeDefs }),
		resolvers: {}
	})
