import React, { useEffect, useState } from 'react'

const Routateborder = ({ className, Text, target }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)

    const safeTarget = target || 0

    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev < safeTarget) {
          return prev + 1
        } else {
          clearInterval(interval)
          return prev
        }
      })
    }, 35)

    return () => clearInterval(interval)
  }, [target])

  return (
    <div>
      <div className='w-[250px] h-[300px] md:w-[270px] md:h-[320px] shadow-lg md:shadow-2xl flex items-center justify-center flex-col'>
        
        <span className='w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full bg-[#C4C4C4] inline-block relative'>
          
          {/* rotating border */}
          <span className={`w-[180px] h-[180px] md:w-[200px] md:h-[200px] bg-[#C4C4C4] rounded-full inline-block absolute border-[10px] border-c2 border-r-transparent animate-rotateBorder ${className}`}></span>

          {/* white circle + number */}
          <span className='bg-white w-[160px] h-[160px] md:w-[180px] md:h-[180px] inline-block rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
               
            <span className='text-[30px] md:text-[34px] font-semibold font-vol text-c2'>
              {count} %
            </span>

          </span>

        </span>
  
        <h1 className='text-xl md:text-[26px] font-vol font-semibold text-c1 mt-[24px]'>
          {Text}
        </h1>

      </div>
    </div>
  )
}

export default Routateborder