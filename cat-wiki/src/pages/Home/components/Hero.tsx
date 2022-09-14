import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/CatwikiLogoWhite.svg'
import { useBreeds } from '../../../hooks/query/useBreeds'
import SearchForm from './SearchForm'

interface Props {}

export default function Hero({}: Props) {
  const { data } = useBreeds(0, 4)

  return (
    <>
      <section className='text-white rounded-t-[42px] p-[94px] min-h-[520px] bg-heroLarge bg-cover  bg-top bg-no-repeat'>
        <img src={logo} alt='logo' className='h-[87px]' />
        <p className='text-xl mt-3'>
          Get to know more about your <br /> cat breed
        </p>
        <SearchForm />
      </section>
      <section className='bg-[#e3e1dc] text-[#291507] rounded-b-[42px] p-[94px] pt-[40px]'>
        <p className='text-lg font-medium relative'>
          Most Searched Breeds
          <span className='absolute bottom-0 left-0 w-[60px] h-[3px] bg-[#291507]'></span>
        </p>
        <div className='mt-12 flex justify-between'>
          <h1 className='text-5xl font-bold'>
            66+ Breeds For you <br /> to discover
          </h1>
          <a
            href='#'
            className='font-bold self-end flex items-center gap-2 text-[#29150799]'
          >
            SEE MORE <BsArrowRight color='#7F736A' />
          </a>
        </div>
        <div className='mt-[46px] flex flex-wrap justify-between'>
          {data?.map((breed, index) => (
            <div key={breed.id}>
              <Link
                to={`/breed/${breed.id}`}
                className='block w-[220px] h-[220px] relative cursor-pointer overflow-hidden rounded-[24px]'
              >
                <img
                  src={breed.image?.url}
                  alt={breed.name}
                  className='hover:scale-110 transition-all duration-300 w-full h-full object-cover object-center z-10 absolute'
                />
                {index === 0 && (
                  <div className='absolute h-[80%] w-[20px] bg-[#dec68b] top-[10%] z-0 -left-4 rounded-[14px]'></div>
                )}
              </Link>
              <p className='mt-5 capitalize text-lg font-semibold'>
                {breed.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
