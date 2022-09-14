import React, {
  KeyboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useAllBreeds } from '../../../hooks/query/useAllBreeds'
import { Breed } from '../../../models/Breed'

interface Props {}

export default function SearchForm({}: Props) {
  const { data } = useAllBreeds()
  const [term, setTerm] = useState('')
  const [cursor, setCursor] = useState(0)
  const [filteredData, setFilteredData] = useState<Breed[]>([])
  const listRef = useRef<HTMLUListElement>(null)
  const listItemRef = useRef<Record<any, RefObject<HTMLLIElement>>>()
  const navigate = useNavigate()

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
  }, [term])

  useEffect(() => {
    if (listItemRef.current && listItemRef.current[cursor]) {
      listItemRef.current[cursor].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }, [cursor])

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

  return (
    <form className='mt-14' onSubmit={(e) => e.preventDefault()}>
      <div className='relative w-[390px] h-[70px]'>
        <input
          value={term}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTerm(e.currentTarget.value)}
          type='text'
          placeholder='Enter your breed'
          className='text-lg placeholder:text-black w-full h-full text-black px-8 py-7 pr-12 rounded-[60px]'
        />
        <div className='cursor-pointer absolute text-xl -translate-y-1/2 right-5 top-1/2 text-black'>
          <BsSearch />
        </div>
        {term && filteredData.length > 0 && (
          <ul
            ref={listRef}
            className='overflow-y-auto z-10 flex flex-col rounded-[24px] p-3 w-full max-h-[219px] bg-white text-black top-full translate-y-[16px] left-0  absolute'
          >
            {filteredData.map((cat, index) => (
              <li
                ref={listItemRef.current?.[index]}
                key={index}
                className={`w-full px-3 py-4 rounded-xl text-lg hover:bg-[#9797971A] ${
                  index === cursor ? 'bg-[#9797971A]' : ''
                }`}
              >
                <Link
                  to={`/breed/${cat.id}`}
                  className='flex items-center justify-between w-full h-full'
                >
                  {cat.name}
                  <img
                    src={cat.image?.url}
                    alt={cat.id}
                    className='rounded-[5px] h-10 w-10 inline-block'
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  )
}
