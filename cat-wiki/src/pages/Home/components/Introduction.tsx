import { BsArrowRight } from 'react-icons/bs'
import img1 from '../../../assets/images/image1.png'
import img2 from '../../../assets/images/image2.png'
import img3 from '../../../assets/images/image3.png'

interface Props {}

export default function Introduction({}: Props) {
  return (
    <div className='p-[94px] flex flex-col md:flex-row'>
      <div className='flex-1 flex flex-col justify-center'>
        <h1 className='text-5xl text-[#291507] font-bold leading-[58px] relative pr-28'>
          <span className='w-[67px] h-[3px] bg-[#4D270C] absolute -top-[16px]'></span>
          Why should you have a cat?
        </h1>
        <p className='font-medium text-[#291507] mt-11 pr-32 leading-6'>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower stress and anxiety leves
        </p>
        <div>
          <a
            href='https://animalkind.org/blog/top-5-reasons-cat/'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-16 font-bold self-end flex items-center gap-2 text-[#29150799]'
          >
            READ MORE <BsArrowRight color='#7F736A' />
          </a>
        </div>
      </div>
      <div className='flex-1 grid grid-cols-2 gap-y-[27px] gap-x-[27px] md:gap-x-0 justify-items-end'>
        <div>
          <img src={img2} alt='cat2' />
        </div>
        <div className='row-span-2'>
          <img src={img3} alt='cat3' className='w-[238px] ' />
        </div>
        <div>
          <img src={img1} alt='cat1' className='w-[195px]' />
        </div>
      </div>
    </div>
  )
}
