const RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  const res = await fetch(RANDOM_FACT_URL)
  const data = await res.json()
  return data.fact
}
// export function getRandomFactWithFetch () {
//   return fetch(RANDOM_FACT_URL)
//     .then(res => res.json())
//     .then(data => {
//       return data.fact
//     })
// }
