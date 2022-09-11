import { Link } from 'react-router-dom'
import logo from '../../assets/images/CatwikiLogo.svg'

export default function Header() {
  return (
    <header className='h-[108px] '>
      <div className='h-full mx-auto flex items-center'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
    </header>
  )
}
