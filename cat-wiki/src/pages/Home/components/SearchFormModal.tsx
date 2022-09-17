import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useSearchModalContext } from '../../../context/SearchModalContext'
import { useAllBreeds } from '../../../hooks/query/useAllBreeds'
import { Breed } from '../../../models/Breed'

export default function SearchFormModal() {
  const { data } = useAllBreeds()
  const [term, setTerm] = useState('')
  const [filteredData, setFilteredData] = useState<Breed[]>([])
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const { hideModal } = useSearchModalContext()

  useEffect(() => {
    if (data) {
      const regex = new RegExp(term, 'i')
      const filteredData = data.filter((cat) => cat.name.match(regex))
      setFilteredData(filteredData)
    }
  }, [term])

  const { isShow } = useSearchModalContext()

  if (!isShow) return <></>

  return (
    <div className='fixed top-0 right-0 w-screen h-screen bg-white z-10 py-2 px-4'>
      <header className='text-right'>
        <button
          onClick={hideModal}
          className='font-bold w-8 h-8 bg-[#9797971A]'
        >
          X
        </button>
      </header>
      <form onSubmit={(e) => e.preventDefault()} className='mt-5'>
        <div className='relative w-full lg:h-[70px]'>
          <input
            value={term}
            onChange={(e) => setTerm(e.currentTarget.value)}
            onFocus={() => setShowMenu(true)}
            onBlur={() => setShowMenu(false)}
            type='text'
            placeholder='Search'
            className='text-lg placeholder:text-black w-full h-full text-black px-8 py-4 pr-12 rounded-[60px] border border-black'
          />
          <div className='cursor-pointer absolute text-xl -translate-y-1/2 right-3 lg:right-5 top-1/2 text-black'>
            <BsSearch />
          </div>
          {showMenu && filteredData.length > 0 && (
            <ul className='shadow-xl overflow-y-auto z-10 flex flex-col gap-1 rounded-[24px] px-3 w-full h-[80vh] bg-white text-black top-full translate-y-[16px] left-0  absolute'>
              {filteredData.map((cat, index) => (
                <li
                  key={index}
                  className={`w-full px-3 py-4 text-lg hover:bg-[#9797971A] border-b border-gray-500`}
                >
                  <div
                    role='a'
                    onMouseDown={() => navigate(`/breed/${cat.id}`)}
                    className='flex items-center justify-between w-full h-full'
                  >
                    {cat.name}
                    <img
                      src={cat.image?.url}
                      alt={cat.id}
                      className='rounded-[5px] h-14 w-14 inline-block object-cover'
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  )
}
