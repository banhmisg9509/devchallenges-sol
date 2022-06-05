import { MdPhone, MdLock } from 'react-icons/md'
import Input from './components/Input'
const App = () => {
  return (
    <div className='container mx-auto w-screen min-h-screen p-4 bg-slate-50'>
      <h1 className='text-center text-3xl'>Input Component</h1>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Default</h2>
        <Input placeholder='Placeholder' type='password' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Error</h2>
        <Input placeholder='Placeholder' error />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Disabled</h2>
        <Input placeholder='Placeholder' disabled />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Helper Text</h2>
        <div className='space-x-10'>
          <Input placeholder='Placeholder' helperText='some interesting text' />
          <Input placeholder='Placeholder' error helperText='some interesting text' />
        </div>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Icon</h2>
        <div className='space-x-10'>
          <Input placeholder='Placeholder' startIcon={<MdPhone />} />
          <Input placeholder='Placeholder' endIcon={<MdLock />} />
        </div>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Size</h2>
        <div className='space-x-10'>
          <Input placeholder='Placeholder' _size='sm' />
          <Input placeholder='Placeholder' _size='md' />
        </div>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Value</h2>
        <Input placeholder='Placeholder' value='Text' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Full Witdh</h2>
        <Input placeholder='Placeholder' fullWitdh />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 text-yellow-600'>Multiline</h2>
        <Input placeholder='Placeholder' multiline row={4} />
      </div>
    </div>
  )
}

export default App
