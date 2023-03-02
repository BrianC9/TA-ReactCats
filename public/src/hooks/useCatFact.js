import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'
export function useCatFact (nWords) {
  const [fact, setFact] = useState()
  const refreshFact = async () => {
    const fact = await getRandomFact(nWords)
    setFact(fact)
  }

  // Retrieve random fact
  useEffect(() => {
    refreshFact()
  }, [])
  return { fact, refreshFact }
}
