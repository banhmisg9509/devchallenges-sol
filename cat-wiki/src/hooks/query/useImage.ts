import { useQuery } from '@tanstack/react-query'
import { catAPI } from '../../api/catAPI'

export const useImage = (imageId: string | undefined) => {
  return useQuery(['image', imageId], () => catAPI.image(imageId!), {
    staleTime: 5 * 60 * 1000,
    enabled: !!imageId,
  })
}
