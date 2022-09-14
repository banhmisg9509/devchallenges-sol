import { useQuery } from '@tanstack/react-query'
import { catAPI } from '../../api/catAPI'

export const useBreed = (breedId: string | undefined) => {
  return useQuery(['breed', breedId], () => catAPI.breed(breedId!), {
    staleTime: 5 * 60 * 1000,
    enabled: !!breedId,
  })
}
