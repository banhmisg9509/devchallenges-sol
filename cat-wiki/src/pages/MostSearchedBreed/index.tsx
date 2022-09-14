import { useBreeds } from '../../hooks/query/useBreeds'
import { Link } from 'react-router-dom'

export default function MostSearchedBreed() {
  const { data: breeds } = useBreeds(0, 10)
  return (
    <section className='mb-28'>
      <h1 className='text-4xl text-[#291507] font-bold'>
        Top 10 most searched breeds
      </h1>
      <div className='flex flex-col gap-[55px] mt-12'>
        {breeds?.map((breed, index) => (
          <Link
            to={`/breed/${breed.id}`}
            className='flex items-center gap-[46px]'
            key={breed.id}
          >
            <div className='w-[170px] h-[170px] flex-shrink-0'>
              <img
                src={breed.image.url}
                alt={breed.name}
                className='w-full h-full object-cover rounded-[24px]'
              />
            </div>
            <div>
              <p className='font-semibold text-4xl text-[#291507]'>
                {index + 1}. {breed.name}
              </p>
              <p className='text-lg text-[#291507] font-medium leading-7 mt-6 text-justify'>
                {breed.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
