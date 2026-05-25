import React from 'react'

const Heading = ({className , text}) => {
  return (
    <div>
      <h1 className={`font-vol font-medium text-[32px] sm:text-[42px] md:text-[42px] lg:text-[50px] text-c1 ${className}`}>
        {text}
      </h1>
    </div>
  )
}

export default Heading