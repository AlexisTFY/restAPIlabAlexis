export interface Info<T> {
  info?: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results?: T
}

export interface CharacterLocation {
  name: string
  url: string
}
export interface CharacterEntityApi {
  id: number
  name: string
  url: string
  created: string
  status: 'Dead' | 'Alive' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[],
  bestSentences
}
