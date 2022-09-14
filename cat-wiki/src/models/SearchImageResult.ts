import { Breed } from './Breed'

export interface SearchImageResult {
  breeds: Breed[]
  id: string
  url: string
  width: number
  height: number
}
