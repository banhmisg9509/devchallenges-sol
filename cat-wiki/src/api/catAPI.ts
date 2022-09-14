import { Breed } from '../models/Breed'
import { Image } from '../models/Image'
import { SearchImageResult } from '../models/SearchImageResult'
import { SearchOption } from '../models/SearchOption'
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
  breed: async (breed_id: string): Promise<Breed> => {
    return await httpClient.get(`/breeds/${breed_id}`)
  },
  image: async (image_id: string): Promise<Image> => {
    return await httpClient.get(`/images/${image_id}`)
  },
  images: async (searchOption?: SearchOption): Promise<SearchImageResult[]> => {
    return await httpClient.get('/images/search', {
      params: {
        ...searchOption,
      },
    })
  },
}
