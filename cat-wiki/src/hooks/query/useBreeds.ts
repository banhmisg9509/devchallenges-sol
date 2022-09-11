import { useQuery } from '@tanstack/react-query'
import { catAPI } from '../../api/catAPI'
export const useBreeds = (page: number, limit: number) => {
  return useQuery(
    ['getBreeds', page, limit],
    () => catAPI.breeds(page, limit),
    {
      staleTime: 5 * 60 * 1000,
    }
  )
}
