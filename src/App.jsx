import './App.css'
import { gql, useQuery } from '@apollo/client'

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
  const { loading, error, data } = useQuery(DOGS) 

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : ${error} </p>

  return (
    <>
      <h1>GraphQLとReact</h1>
      <div className='dogsContainer'>
        {data.dogs.map((dog) => (
          <div key={dog.id}>
            <div className='dogCard'>
              <img src={dog.thumbnail.url} alt="犬の画像" />
              <p>{dog.name}</p>
              <p>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
