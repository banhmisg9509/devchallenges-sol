import { Breed } from '../models/Breed'
import httpClient from './httpClient'

export const catAPI = {
  allBreeds: async (): Promise<Breed[]> => {
    return await httpClient.get('/breeds')
  },
  breeds: async (page: number, limit: number): Promise<Breed[]> => {
    return await httpClient.get('/breeds', {
      params: {
        page,
        limit,
      },
    })
  },
}
