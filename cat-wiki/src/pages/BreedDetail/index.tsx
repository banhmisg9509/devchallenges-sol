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
      <section className='flex flex-col lg:flex-row gap-8 lg:gap-[115px] my-5 lg:my-0 px-3'>
        <div className='lg:ml-14 mx-auto'>
          <div className='h-[300px] w-[300px] lg:h-[370px] lg:w-[370px] relative'>
            <img
              src={image?.url}
              alt={breed?.name}
              className='w-full h-full object-cover object-center rounded-[24px] z-10 absolute'
            />
            <div className='absolute h-[80%] w-[20px] bg-[#dec68b] top-[10%] z-0 -left-3 rounded-[14px]'></div>
          </div>
        </div>
        <div className='max-w lg:max-w-[80%]'>
          <h1 className='text-3xl lg:text-4xl font-semibold text-[#291507]'>
            {breed?.name}
          </h1>
          <p className='font-medium text-md lg:text-lg mt-6 text-justify'>
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
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Adaptability: </strong>
              <Score score={breed?.adaptability} />
            </p>
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Affection level: </strong>
              <Score score={breed?.affection_level} />
            </p>
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Child Friendly: </strong>
              <Score score={breed?.child_friendly} />
            </p>
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Grooming: </strong>
              <Score score={breed?.grooming} />
            </p>
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Intelligence: </strong>
              <Score score={breed?.intelligence} />
            </p>
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Health issues: </strong>
              <Score score={breed?.health_issues} />
            </p>
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Social needs: </strong>
              <Score score={breed?.social_needs} />
            </p>
            <p className='flex justify-between items-center sm:w-[70%] lg:w-full xl:w-[72%]'>
              <strong className='flex-shrink-0'>Stranger friendly: </strong>
              <Score score={breed?.stranger_friendly} />
            </p>
          </div>
        </div>
      </section>
      <section className='mb-[178px]'>
        <h2 className='text-3xl lg:text-4xl font-semibold text-[#291507]'>
          Other photos
        </h2>
        <div className='grid grid-cols-[repeat(2,180px)] md:grid-cols-[repeat(3,250px)] lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:gap-[46px] mt-10 place-items-center justify-center'>
          {images?.map((image) => (
            <div
              className='w-[180px] h-[180px] md:w-[250px] md:h-[250px] xl:w-[278px] xl:h-[278px]'
              key={image.id}
            >
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
