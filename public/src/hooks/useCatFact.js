import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'
export function useCatFact () {
  const [fact, setFact] = useState()
  const refreshFact = async () => {
    const fact = await getRandomFact()
    setFact(fact)
  }

  // Retrieve random fact
  useEffect(() => {
    refreshFact()
  }, [])
  return { fact, refreshFact }
}
