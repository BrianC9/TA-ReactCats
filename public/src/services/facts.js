const RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export async function getRandomFact (firstNWords) {
  const res = await fetch(RANDOM_FACT_URL)
  const data = await res.json()
  const factSplitted = data.fact.split(' ', firstNWords).join(' ')
  console.log(factSplitted)
  return factSplitted
}
// export function getRandomFactWithFetch () {
//   return fetch(RANDOM_FACT_URL)
//     .then(res => res.json())
//     .then(data => {
//       return data.fact
//     })
// }
