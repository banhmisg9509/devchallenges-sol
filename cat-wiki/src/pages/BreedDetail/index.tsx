import { useParams } from 'react-router-dom'
import { useBreed } from '../../hooks/query/useBreed'
import { useImage } from '../../hooks/query/useImage'
import { useImages } from '../../hooks/query/useImagesSearch'
import { Score } from './components/Score'

export default function BreedDetailPage() {
  const { breedId } = useParams()
  const { data: breed } = useBreed(breedId)
  const { data: image } = useImage(breed?.reference_image_id)
  const { data: images } = useImages({
    format: 'json',
    size: 'small',
    limit: 8,
    breed_ids: breed?.id,
  })

  return (
    <>
      <section className='flex gap-[115px]'>
        <div className='ml-14'>
          <div className='h-[370px] w-[370px]'>
            <img
              src={image?.url}
              alt={breed?.name}
              className='w-full h-full object-cover object-center rounded-[24px]'
            />
          </div>
        </div>
        <div className='max-w-[80%]'>
          <h1 className='text-4xl font-semibold text-[#291507]'>
            {breed?.name}
          </h1>
          <p className='font-medium text-lg mt-6 text-justify'>
            {breed?.description}
          </p>
          <div className='mt-8 flex flex-col gap-8'>
            <p>
              <strong>Temperament: </strong>
              <span className='font-medium'>{breed?.temperament}</span>
            </p>
            <p>
              <strong>Origin: </strong>
              <span className='font-medium'>{breed?.origin}</span>
            </p>
            <p>
              <strong>Life Span: </strong>
              <span className='font-medium'>{breed?.life_span}</span>
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Adaptability: </strong>
              <Score score={breed?.adaptability} />
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Affection level: </strong>
              <Score score={breed?.affection_level} />
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Child Friendly: </strong>
              <Score score={breed?.child_friendly} />
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Grooming: </strong>
              <Score score={breed?.grooming} />
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Intelligence: </strong>
              <Score score={breed?.intelligence} />
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Health issues: </strong>
              <Score score={breed?.health_issues} />
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Social needs: </strong>
              <Score score={breed?.social_needs} />
            </p>
            <p className='flex justify-between items-center w-[72%]'>
              <strong>Stranger friendly: </strong>
              <Score score={breed?.stranger_friendly} />
            </p>
          </div>
        </div>
      </section>
      <section className='mb-[178px]'>
        <h2 className='text-4xl font-semibold text-[#291507]'>Other photos</h2>
        <div className='grid grid-cols-4 grid-rows-2 gap-[46px] mt-10'>
          {images?.map((image) => (
            <div className='w-[278px] h-[278px]' key={image.id}>
              <img
                src={image.url}
                alt={image.id}
                className='object-cover object-center w-full h-full rounded-[24px]'
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
