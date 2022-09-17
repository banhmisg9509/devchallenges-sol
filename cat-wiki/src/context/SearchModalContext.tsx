import React, {
  PropsWithChildren,
  useContext,
  useState,
  createContext,
} from 'react'

interface SearchModalContextProps {
  isShow: boolean
  showModal: () => void
  hideModal: () => void
}
const SearchModalContext = createContext<SearchModalContextProps>({
  isShow: false,
  showModal: () => {},
  hideModal: () => {},
})

interface Props extends PropsWithChildren {}
export const SearchModalContextProvider = ({ children }: Props) => {
  const [isShow, setIsShow] = useState(false)

  const showModal = () => {
    setIsShow(true)
  }

  const hideModal = () => {
    setIsShow(false)
  }

  return (
    <SearchModalContext.Provider
      value={{
        isShow,
        showModal,
        hideModal,
      }}
    >
      {children}
    </SearchModalContext.Provider>
  )
}

export const useSearchModalContext = () => useContext(SearchModalContext)
