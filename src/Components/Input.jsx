import React from 'react'

const Input = ({ place, type, className }) => {
  return (
    <input
      type={type}
      placeholder={place}
      className={`
        font-vol font-normal text-[#00413d75] text-xl
        w-[320px] h-[45px]
        rounded-[5px] shadow-2xl border border-[#00413d1a]
        ${className}
      `}
    />
  )
}

export default Input