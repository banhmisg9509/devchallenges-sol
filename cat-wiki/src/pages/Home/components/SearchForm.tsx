import React, {
  KeyboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useSearchModalContext } from '../../../context/SearchModalContext'
import { useAllBreeds } from '../../../hooks/query/useAllBreeds'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { Breed } from '../../../models/Breed'

interface Props {}

export default function SearchForm({}: Props) {
  const { data } = useAllBreeds()
  const [term, setTerm] = useState('')
  const [cursor, setCursor] = useState(0)
  const [filteredData, setFilteredData] = useState<Breed[]>([])
  const [showMenu, setShowMenu] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)
  const listItemRef = useRef<Record<any, RefObject<HTMLLIElement>>>()
  const navigate = useNavigate()
  const { showModal } = useSearchModalContext()
  const matches = useMediaQuery('(max-width: 768px)')
  const [placeholderText, setPlaceholderText] = useState('')

  useEffect(() => {
    if (data) {
      const regex = new RegExp(term, 'i')
      const filteredData = data.filter((cat) => cat.name.match(regex))
      setFilteredData(filteredData)
      if (filteredData.length) {
        const initialValue: Record<any, RefObject<HTMLLIElement>> = {}
        listItemRef.current = filteredData.reduce((acc, _, index) => {
          acc[index] = React.createRef<HTMLLIElement>()
          return acc
        }, initialValue)
      }
    }
  }, [term, data])

  useEffect(() => {
    if (listItemRef.current && listItemRef.current[cursor]) {
      listItemRef.current[cursor].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }, [cursor])

  useEffect(() => {
    if (matches) {
      setPlaceholderText('Enter')
    } else {
      setPlaceholderText('Enter your breed')
    }
  }, [matches])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'ArrowUp' && cursor > 0) {
      setCursor((value) => value - 1)
    }

    if (e.code === 'ArrowDown' && cursor < filteredData.length - 1) {
      setCursor((value) => value + 1)
    }

    if (e.code === 'Enter' && cursor > 0 && cursor < filteredData.length - 1) {
      navigate(`/breed/${filteredData[cursor].id}`)
    }
  }

  const handleShowMenu = () => {
    if (placeholderText === "Enter") {
      showModal()
      return
    }
    setShowMenu(true)
  }

  const handleHideMenu = () => {
    setShowMenu(false)
  }

  return (
    <form className='mt-14' onSubmit={(e) => e.preventDefault()}>
      <div className='relative w-[92px] h-[32px] sm:w-[200px] sm:h-[50px] md:w-[250px] lg:w-[390px] lg:h-[70px]'>
        <input
          value={term}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTerm(e.currentTarget.value)}
          onFocus={handleShowMenu}
          onBlur={handleHideMenu}
          type='text'
          placeholder={placeholderText}
          className='text-xs sm:text-sm lg:text-lg placeholder:text-black w-full h-full text-black px-3 py-2 lg:px-8 lg:py-7 lg:pr-12 rounded-[60px]'
        />
        <div
          onClick={handleShowMenu}
          className='cursor-pointer absolute text-[10px] sm:text-lg lg:text-xl -translate-y-1/2 right-3 lg:right-5 top-1/2 text-black'
        >
          <BsSearch />
        </div>
        {showMenu && filteredData.length > 0 && (
          <ul
            ref={listRef}
            className='overflow-y-auto z-20 flex flex-col gap-1 rounded-[24px] p-3 w-full max-h-[219px] bg-white text-black top-full translate-y-[16px] left-0  absolute'
          >
            {filteredData.map((cat, index) => (
              <li
                ref={listItemRef.current?.[index]}
                key={index}
                className={`w-full px-3 py-4 rounded-xl text-lg hover:bg-[#9797971A] cursor-pointer ${
                  index === cursor ? 'bg-[#9797971A]' : ''
                }`}
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
                    className='rounded-[5px] h-10 w-10 inline-block object-cover'
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  )
}
