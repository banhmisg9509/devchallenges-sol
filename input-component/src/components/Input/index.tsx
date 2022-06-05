import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  helperText?: string
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  _size?: 'sm' | 'md'
  fullWitdh?: boolean
  multiline?: boolean
  row?: number
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  _size?: 'sm' | 'md'
  fullWitdh?: boolean
  multiline?: boolean
  row?: number
}

const Input = (props: InputProps | TextAreaProps) => {
  return (
    <label
      className={[
        `${props.fullWitdh ? 'block' : 'inline-block'}`,
        `${props.error && 'text-[#D32F2F] hover:text-[#333333] focus-within:!text-[#D32F2F]'}`,
        'focus-within:!text-[#2962FF] font-noto-sans',
      ].join(' ')}
    >
      <span>Label</span> <br />
      <div
        className={[
          `${props.multiline ? '' : 'max-h-[56px]'}`,
          `${props.fullWitdh ? 'w-full' : 'w-[200px]'}`,
          `${props._size === 'sm' ? 'py-[10px]' : 'py-[18px]'}`,
          `${props.disabled && 'pointer-events-none bg-[#F2F2F2] border-[#E0E0E0]'}`,
          `${props.error && 'border-[#D32F2F] focus-within:!border-[#D32F2F]'}`,
          'flex items-center px-[12px] rounded-lg border border-[#828282] hover:border-[#333333] focus-within:!border-[#2962FF]',
        ].join(' ')}
      >
        {props.startIcon && !props.multiline && <div className='pr-3'>{props.startIcon}</div>}
        {props.multiline ? (
          <>
            <textarea
              {...(props as TextAreaProps)}
              className='resize-none outline-none overflow-hidden bg-transparent leading-5 text-[#333333]'
              rows={props.multiline ? props.row : 1}
              wrap={`${props.multiline ? 'soft' : 'off'}`}
            />
          </>
        ) : (
          <>
            <input
              {...(props as InputProps)}
              className='resize-none outline-none overflow-hidden bg-transparent leading-5 text-[#333333]'
            />
          </>
        )}
        {props.endIcon && !props.multiline && <div className='pl-3'>{props.endIcon}</div>}
      </div>
      {props.helperText && !props.disabled && <p className='text-xs'>{props.helperText}</p>}
    </label>
  )
}

export default Input
