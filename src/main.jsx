import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/clepsz7ri0a9301tcaprdalx8/master",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloClient client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ApolloClient>
)
