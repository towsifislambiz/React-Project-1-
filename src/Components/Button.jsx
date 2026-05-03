import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-c2 px-2 py-4 md:px-3 md:py-6 ${className}`}
    >
      <span className="inline-block text-white px-4 py-2 md:px-9 md:py-4 text-base md:text-lg font-jost font-medium border border-white">
        {text}
      </span>
    </button>
  )
}

export default Button
