import './App.css'
import { gql } from '@apollo/client'

const DOGS = gql`
  query MyQuery {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`

function App() {
  return (
    <div className="App"></div>
  )
}

export default App
