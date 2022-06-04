import Button from './components/Button'
import { MdLocalGroceryStore } from 'react-icons/md'

const App = () => {
  return (
    <div className='container mx-auto w-screen min-h-screen p-4 bg-slate-100'>
      <h1 className='text-center text-4xl mb-4'>Buttons</h1>
      <h2 className='mb-4 text-2xl'>Variant Default</h2>
      <div className='flex gap-10 mb-10 items-center'>
        <Button>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='danger'>Danger</Button>
      </div>
      <h2 className='mb-4 text-2xl'>Variant Text</h2>
      <div className='flex gap-10 mb-10 items-center'>
        <Button variant='text'>Default</Button>
        <Button variant='text' color='primary'>
          Primary
        </Button>
        <Button variant='text' color='secondary'>
          Secondary
        </Button>
        <Button variant='text' color='danger'>
          Danger
        </Button>
      </div>
      <h2 className='mb-4 text-2xl'>Variant Outline</h2>
      <div className='flex gap-10 mb-10 items-center'>
        <Button variant='outline'>Default</Button>
        <Button variant='outline' color='primary'>
          Primary
        </Button>
        <Button variant='outline' color='secondary'>
          Secondary
        </Button>
        <Button variant='outline' color='danger'>
          Danger
        </Button>
      </div>
      <h2 className='mb-4 text-2xl'>Size</h2>
      <div className='flex gap-10 mb-10 items-center'>
        <Button color='primary' size='sm'>
          Small
        </Button>
        <Button color='primary' size='md'>
          Medium
        </Button>
        <Button color='primary' size='lg'>
          Large
        </Button>
      </div>
      <h2 className='mb-4 text-2xl'>Icon</h2>
      <div className='flex gap-10 mb-10 items-center'>
        <Button color='primary'>
          <MdLocalGroceryStore /> Prefix Icon
        </Button>
        <Button color='primary'>
          Suffix Icon <MdLocalGroceryStore />
        </Button>
      </div>
      <h2 className='mb-4 text-2xl'>Disabled</h2>
      <div className='flex gap-10 mb-10 items-center'>
        <Button color='primary' disabled>
          Default
        </Button>
        <Button color='primary' variant='text' disabled>
          Text
        </Button>
      </div>
      <h2 className='mb-4 text-2xl'>Disabled Shadow</h2>
      <div className='flex gap-10 mb-10 items-center'>
        <Button disableShadow>Default</Button>
        <Button color='primary' disableShadow>
          Primary
        </Button>
        <Button color='secondary' disableShadow>
          Secondary
        </Button>
        <Button color='danger' disableShadow>
          Danger
        </Button>
      </div>
    </div>
  )
}

export default App
