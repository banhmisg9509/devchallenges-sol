import Hero from './components/Hero'
import Introduction from './components/Introduction'

interface Props {}

export default function Home({}: Props) {
  return (
    <div>
      <Hero />
      <Introduction />
    </div>
  )
}
