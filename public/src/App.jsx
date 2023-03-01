import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }
  return (
    <main>
      <h1>Random cats</h1>
      <button onClick={handleClick}>New Fact</button>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`Cat picture with the the text ${fact}`} />}

    </main>
  )
}
