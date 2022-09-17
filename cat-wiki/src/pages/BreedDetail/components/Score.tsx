export function Score({ score }: { score: number | undefined }) {
  if (!score) return <></>

  return (
    <span className='inline-block'>
      <span className='flex gap-2'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className={`flex-shrink-0 w-[30px] h-[6px] xs:w-[45px] xs:h-[10px] lg:w-[40px] xl:w-[60px] xl:h-[12px] ${
                index < score ? 'bg-[#544439]' : 'bg-[#E0E0E0]'
              } rounded-lg`}
            ></span>
          ))}
      </span>
    </span>
  )
}
