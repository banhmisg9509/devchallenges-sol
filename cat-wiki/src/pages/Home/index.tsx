import { SearchModalContextProvider } from '../../context/SearchModalContext'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import SearchFormModal from './components/SearchFormModal'

interface Props {}

export default function Home({}: Props) {
  return (
    <SearchModalContextProvider>
      <div>
        <Hero />
        <Introduction />
        <SearchFormModal />
      </div>
    </SearchModalContextProvider>
  )
}
