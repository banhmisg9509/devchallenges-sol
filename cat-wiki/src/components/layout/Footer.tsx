import logo from '../../assets/images/CatwikiLogoWhite.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='h-[108px]'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between rounded-tl-[42px] rounded-tr-[42px] bg-black p-6 pt-4 md:pt-8 md:px-8 h-full '>
        <Link to='/' className='block'>
          <img src={logo} alt='logo' className='fill-red h-[35px]' />
        </Link>
        <p className='text-white text-xs md:text-lg'>
          <span className='text-xl'>&copy;</span> created by{' '}
          <span className='underline font-bold'>ndhung</span> - devChallenge.io
          2021
        </p>
      </div>
    </div>
  )
}
