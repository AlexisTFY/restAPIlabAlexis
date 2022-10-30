export interface Character {
  id: number;
  name: string;
  gender: string;
  image: string,
  status: string,
  species: string,
  type: string,
  origin: string,
  bestSentences: string,
}

export const createEmptyCharacter = (): Character => ({
  id: null,
  name: '',
  gender: '',
  image:'',
  status: '',
  species: '',
  type:'',
  origin: '',
  bestSentences: ''
});
