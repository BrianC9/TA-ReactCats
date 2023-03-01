import { useState, useEffect } from 'react'
const DOMAIN_URL_IMAGE = 'https://cataas.com'

const RANDOM_IAMGE_URL = (firstWord) => `https://cataas.com/cat/says/${firstWord}?json=true`

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  // Retrieve image with random fact
  useEffect(() => {
    if (!fact) return
    const twoFirstWords = fact.split(' ', 2).join(' ')

    fetch(RANDOM_IAMGE_URL(twoFirstWords))
      .then(res => res.json())
      .then(data => setImage(data.url))
  }, [fact])
  return { image: `${DOMAIN_URL_IMAGE}${image}` }
}
