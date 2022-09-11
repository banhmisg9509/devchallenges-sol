import { useQuery } from '@tanstack/react-query'
import { catAPI } from '../../api/catAPI'
export const useAllBreeds = () => {
  return useQuery(['getAllBreeds'], catAPI.allBreeds, {
    staleTime: 5 * 60 * 1000
  })
}
