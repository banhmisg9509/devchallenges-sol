import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAllBreeds } from '../../../hooks/query/useAllBreeds'
import { Breed } from '../../../models/Breed'

interface Props {}

export default function SearchForm({}: Props) {
  const { data } = useAllBreeds()
  const [term, setTerm] = useState('')
  const [filteredData, setFilteredData] = useState<Breed[]>([])

  useEffect(() => {
    if (data) {
      const regex = new RegExp(term, 'i')
      const filteredData = data.filter((cat) => cat.name.match(regex))
      setFilteredData(filteredData)
    }
  }, [term])

  return (
    <form className='mt-14'>
      <div className='relative w-[390px] h-[70px]'>
        <input
          value={term}
          onChange={(e) => setTerm(e.currentTarget.value)}
          type='text'
          placeholder='Enter your breed'
          className='text-lg placeholder:text-black w-full h-full text-black px-8 py-7 pr-12 rounded-[60px]'
        />
        <div className='cursor-pointer absolute text-xl -translate-y-1/2 right-5 top-1/2 text-black'>
          <BsSearch />
        </div>
        {term && filteredData.length > 0 && (
          <ul className='overflow-y-auto z-10 flex flex-col rounded-[24px] p-3 w-full max-h-[219px] bg-white text-black top-full translate-y-[16px] left-0  absolute'>
            {filteredData.map((cat, index) => (
              <li
                key={index}
                className='w-full px-3 py-4 rounded-xl text-lg hover:bg-[#9797971A]'
              >
                <Link
                  to={`/cat/${cat.id}`}
                  className='inline-block w-full h-full'
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  )
}
