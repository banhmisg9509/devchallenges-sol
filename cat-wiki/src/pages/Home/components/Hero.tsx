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
      <section className='text-white rounded-t-[42px] p-[20px] sm:p-[80px] min-h-[150px] sm:min-h-[400px] lg:p-[94px] lg:min-h-[520px] bg-herorSmall md:bg-herorMedium  lg:bg-heroLarge bg-cover  bg-top bg-no-repeat'>
        <img src={logo} alt='logo' className='h-[35px] sm:h-[50px] md:h-[64px] lg:h-[87px]' />
        <p className='text-xs sm:text-sm md:text-lg lg:text-xl mt-3'>
          Get to know more about your <br /> cat breed
        </p>
        <SearchForm />
      </section>
      <section className='bg-[#e3e1dc] text-[#291507] rounded-b-[42px] p-[30px] pt-[18px] lg:p-[107px] lg:pt-[40px]'>
        <p className='text-xs lg:text-lg font-medium relative'>
          Most Searched Breeds
          <span className='absolute -bottom-1 lg:bottom-0 left-0 w-[40px] lg:w-[60px] h-[3px] bg-[#291507] rounded-xl'></span>
        </p>
        <div className='mt-[18px] lg:mt-12 flex justify-between'>
          <h1 className='text-[18px] lg:text-5xl font-bold'>
            66+ Breeds For you <br /> to discover
          </h1>
          <Link
            to='/most-searched-breeds'
            className='font-bold self-end hidden sm:flex items-center gap-2 text-[#29150799]'
          >
            SEE MORE <BsArrowRight color='#7F736A' />
          </Link>
        </div>
        <div className='mt-[26px] lg:mt-[46px] grid grid-cols-[repeat(2,minmax(134px,1fr))] xs:grid-cols-[repeat(2,minmax(180px,1fr))] sm:grid-cols-4 place-items-center lg:place-items-end gap-x-3 lg:gap-x-10 gap-y-5 xl:gap-y-[51px]'>
          {data?.map((breed, index) => (
            <div key={breed.id}>
              <div className='relative'>
                <Link
                  to={`/breed/${breed.id}`}
                  className='block w-[134px] h-[134px] xs:w-[180px] xs:h-[180px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px] xl:w-[220px] xl:h-[220px] relative cursor-pointer overflow-hidden rounded-[24px]'
                >
                  <img
                    src={breed.image?.url}
                    alt={breed.name}
                    className='hover:scale-110 transition-all duration-300 w-full h-full object-cover object-center z-10 absolute'
                  />
                </Link>
                {index === 0 && (
                  <div className='absolute h-[80%] w-[20px] bg-[#dec68b] top-[10%] z-0 -left-1 lg:-left-3 rounded-[14px]'></div>
                )}
              </div>
              <p className='mt-3 lg:mt-5 capitalize text-xs lg:text-lg font-semibold'>
                {breed.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
