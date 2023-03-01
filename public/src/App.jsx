import { useState, useEffect } from 'react'
import './App.css'
const RANDOM_FACT_URL = 'https://catfact.ninja/fact'
const RANDOM_IAMGE_URL = (firstWord) => `https://cataas.com/cat/says/${firstWord}?json=true`
const DOMAIN_URL_IMAGE = 'https://cataas.com'
export default function App () {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  // Retrieve random fact
  useEffect(() => {
    fetch(RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => setFact(data.fact)
      )
  }, [])

  // Retrieve image with random fact
  useEffect(() => {
    if (!fact) return
    const twoFirstWords = fact.split(' ', 2).join(' ')

    fetch(RANDOM_IAMGE_URL(twoFirstWords))
      .then(res => res.json())
      .then(data => setImage(data.url))
  }, [fact])
  return (
    <main>
      <h1>Random cats</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={`${DOMAIN_URL_IMAGE}${image}`} alt={`Cat picture with the the text ${fact}`} />}

    </main>
  )
}
