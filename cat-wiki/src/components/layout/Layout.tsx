import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props extends PropsWithChildren {}

export default function Layout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen min-w-[340px] max-w-[1288px] mx-auto px-5'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}
