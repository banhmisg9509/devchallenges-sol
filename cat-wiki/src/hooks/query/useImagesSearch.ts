import { useQuery } from '@tanstack/react-query'
import { catAPI } from '../../api/catAPI'
import { SearchOption } from '../../models/SearchOption'

export const useImages = (searchOption?: SearchOption) => {
  return useQuery(['images', searchOption], () => catAPI.images(searchOption), {
    staleTime: 5 * 60 * 1000,
    enabled: !!searchOption?.breed_ids,
  })
}
