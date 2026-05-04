import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-c2 px-2 py-4 sm:px-4 sm:py-4 md:px-4 md:py-4 ${className}`}
    >
      <span className="inline-block text-white px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3 text-base md:text-lg font-jost font-medium border border-white">
        {text}
      </span>
    </button>
  )
}

export default Button
